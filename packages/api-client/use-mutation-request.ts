'use client';

import { useCallback, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import BaseRequest from './base-request';
import type { SuccessEnvelope } from './types/envelope';
import type { RequestMethod } from './use-request';

export interface UseMutationRequestReturn<TData, TBody = unknown> {
  trigger: (body?: TBody) => Promise<SuccessEnvelope<TData>>;
  isMutating: boolean;
  data: SuccessEnvelope<TData> | undefined;
  error: unknown;
  reset: () => void;
}

/**
 * SWR mutation hook for POST / PUT / PATCH / DELETE operations.
 *
 * Per wenza/README.md §7.6.
 *
 * @example
 * const { trigger, isMutating } = useMutationRequest('enrollments', 'post');
 * const res = await trigger({ cohort_id: 1 });
 * // res.data is the new enrollment
 */
export function useMutationRequest<TData = unknown, TBody = unknown>(
  url: string,
  method: RequestMethod = 'post',
): UseMutationRequestReturn<TData, TBody> {
  const [localData, setLocalData] = useState<SuccessEnvelope<TData> | undefined>(undefined);

  const fetcher = useCallback(
    async (
      _key: string,
      { arg }: { arg?: TBody },
    ): Promise<SuccessEnvelope<TData>> => {
      const response = await BaseRequest.request<SuccessEnvelope<TData>>({
        method,
        url,
        data: arg,
      });
      return response.data;
    },
    [method, url],
  );

  const {
    trigger: swrTrigger,
    isMutating,
    error,
    reset,
  } = useSWRMutation<SuccessEnvelope<TData>, unknown, string, TBody>(url, fetcher);

  const trigger = useCallback(
    async (body?: TBody): Promise<SuccessEnvelope<TData>> => {
      // @ts-expect-error swr mutation trigger has complex overloads with generics
      const result = (await swrTrigger(body)) as SuccessEnvelope<TData>;
      setLocalData(result);
      return result;
    },
    [swrTrigger],
  );

  return {
    trigger,
    isMutating,
    data: localData,
    error,
    reset,
  };
}
