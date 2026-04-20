'use client';

import { useCallback, useState } from 'react';
import useSWR, { type SWRConfiguration, type KeyedMutator } from 'swr';
import { toast } from 'sonner';
import axios from 'axios';
import BaseRequest from './base-request';
import type { SuccessEnvelope, PaginatedData, ErrorEnvelope } from './types/envelope';

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface UseRequestOptions<T> extends SWRConfiguration {
  method?: RequestMethod;
  /** Path to the data node in the response. Defaults to 'data'. */
  node?: string;
  /** Value returned before first successful fetch. */
  initialValue?: T;
  /** Query params appended to the URL. */
  params?: Record<string, unknown>;
  /** Show an error toast automatically. Default: true */
  showError?: boolean;
  /** Navigate back on error. Default: false */
  goBackOnError?: boolean;
  /** Append records to existing data on loadMore (infinite scroll). Default: false */
  keepPaginatedData?: boolean;
}

export interface UseRequestReturn<T> {
  data: T;
  isLoading: boolean;
  loading: boolean;
  error: unknown;
  mutate: KeyedMutator<SuccessEnvelope<T | PaginatedData<T extends Array<infer I> ? I : T>>>;
  // Pagination (only meaningful when response is a paginated collection)
  current_page?: number;
  last_page?: number;
  per_page?: number;
  from?: number;
  to?: number;
  total?: number;
  next_page_url?: string | null;
  prev_page_url?: string | null;
  links?: Array<{ url: string | null; label: string; active: boolean }>;
  onLoadMore: () => void;
  onLoadPrevious: () => void;
  onChangeParams: (newParams: Record<string, unknown>) => void;
  onRefresh: () => Promise<void>;
}

/**
 * SWR-based data fetching hook for Wenza API.
 *
 * - Auto-attaches Bearer token from Redux (via BaseRequest interceptor)
 * - Unwraps the { status, message, data } envelope
 * - Detects paginated responses (data.records) and exposes pagination state
 * - Auto-logout on 401 Unauthenticated responses
 *
 * Per wenza/README.md §7.
 *
 * @example
 * const { data, isLoading, total } = useRequest<Course[]>('courses');
 */
export function useRequest<T = unknown>(
  url: string | null,
  options: UseRequestOptions<T> = {}
): UseRequestReturn<T> {
  const {
    method = 'get',
    initialValue,
    params: initialParams = {},
    showError = true,
    keepPaginatedData = false,
    ...swrOptions
  } = options;

  const [params, setParams] = useState(initialParams);
  const [page, setPage] = useState(1);
  const [accumulatedData, setAccumulatedData] = useState<T | undefined>(undefined);

  // Build SWR key from url + params + page
  const swrKey = url
    ? JSON.stringify({ url, params: { ...params, page } })
    : null;

  const fetcher = useCallback(
    async (key: string) => {
      const parsed = JSON.parse(key) as { url: string; params: Record<string, unknown> };
      const response = await BaseRequest.request<SuccessEnvelope<T | PaginatedData<unknown>>>({
        method,
        url: parsed.url,
        params: parsed.params,
      });
      return response.data;
    },
    [method]
  );

  const { data: rawResponse, error, isLoading, mutate } = useSWR(swrKey, fetcher, {
    onError: (err) => {
      // Auto-logout on 401 Unauthenticated
      if (axios.isAxiosError(err)) {
        const envelope = err.response?.data as ErrorEnvelope | undefined;
        if (err.response?.status === 401 && envelope?.message?.includes('Unauthenticated')) {
          // Dispatch logout — done via a custom event so this package stays framework-agnostic
          window.dispatchEvent(new CustomEvent('wenza:unauthenticated'));
        }
      }

      if (showError) {
        const message =
          axios.isAxiosError(err)
            ? (err.response?.data as ErrorEnvelope)?.message ?? err.message
            : 'An unexpected error occurred';
        toast.error(message);
      }
    },
    ...swrOptions,
  });

  // Determine if paginated by checking for records key
  const isPaginated =
    rawResponse?.data != null &&
    typeof rawResponse.data === 'object' &&
    'records' in (rawResponse.data as object);

  let resolvedData: T;
  let paginationMeta: Partial<PaginatedData<unknown>> = {};

  if (isPaginated) {
    const paginated = rawResponse!.data as PaginatedData<unknown>;
    paginationMeta = paginated;

    if (keepPaginatedData && accumulatedData && Array.isArray(accumulatedData)) {
      resolvedData = [...accumulatedData, ...(paginated.records as unknown[])] as unknown as T;
    } else {
      resolvedData = paginated.records as unknown as T;
    }
  } else {
    resolvedData = (rawResponse?.data ?? initialValue) as T;
  }

  const onLoadMore = useCallback(() => {
    if (paginationMeta.next_page_url) {
      if (keepPaginatedData && Array.isArray(resolvedData)) {
        setAccumulatedData(resolvedData);
      }
      setPage((p: number) => p + 1);
    }
  }, [paginationMeta.next_page_url, keepPaginatedData, resolvedData]);

  const onLoadPrevious = useCallback(() => {
    if (paginationMeta.prev_page_url) {
      setPage((p: number) => Math.max(1, p - 1));
    }
  }, [paginationMeta.prev_page_url]);

  const onChangeParams = useCallback((newParams: Record<string, unknown>) => {
    setPage(1);
    setAccumulatedData(undefined);
    setParams((prev: Record<string, unknown>) => ({ ...prev, ...newParams }));
  }, []);

  const onRefresh = useCallback(async () => {
    await mutate();
  }, [mutate]);

  return {
    data: resolvedData ?? (initialValue as T),
    isLoading,
    loading: isLoading,
    error,
    mutate: mutate as UseRequestReturn<T>['mutate'],
    // Pagination metadata
    current_page: paginationMeta.current_page,
    last_page: paginationMeta.last_page,
    per_page: paginationMeta.per_page,
    from: paginationMeta.from,
    to: paginationMeta.to,
    total: paginationMeta.total,
    next_page_url: paginationMeta.next_page_url,
    prev_page_url: paginationMeta.prev_page_url,
    links: paginationMeta.links as Array<{ url: string | null; label: string; active: boolean }> | undefined,
    onLoadMore,
    onLoadPrevious,
    onChangeParams,
    onRefresh,
  };
}
