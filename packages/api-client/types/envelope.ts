/**
 * API Response envelope types per wenza/README.md §8.4.
 * These are the canonical TypeScript definitions for the Wenza API contract.
 * The Laravel backend's ApiResponse trait MUST produce this exact shape.
 */

export interface SuccessEnvelope<T> {
  status: 'success';
  message: string;
  data: T;
}

export type ApiEnvelope<T> = SuccessEnvelope<T>;

export type PaginatedEnvelope<T> = ApiEnvelope<PaginatedData<T>>;


export interface PaginatedData<T> {
  records: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
  links: Array<{ url: string | null; label: string; active: boolean }>;
}

export interface ErrorEnvelope {
  status: 'error';
  message: string;
  errors?: Record<string, string[]>;
}
