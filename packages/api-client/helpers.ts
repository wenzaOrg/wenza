import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import type { ErrorEnvelope } from './types/envelope';

/**
 * Parses an Axios error into a human-readable message.
 * Handles the Wenza error envelope { status, message, errors }.
 */
export function parseNetworkError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ErrorEnvelope>;
    return axiosError.response?.data?.message ?? axiosError.message ?? 'An unexpected error occurred';
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

/**
 * Gets the field-level validation errors from a 422 response.
 */
export function parseValidationErrors(error: unknown): Record<string, string[]> | undefined {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ErrorEnvelope>;
    return axiosError.response?.data?.errors;
  }
  return undefined;
}

/**
 * Shows a toast for an API error and re-throws.
 * Used as a catch handler in mutation callbacks.
 */
export function catchError(error: unknown): never {
  const message = parseNetworkError(error);
  toast.error(message);
  throw error;
}

/**
 * Global SWR cache mutate — revalidates all cached requests.
 * Import and call after mutations that affect multiple views.
 */
export async function onReloadData(): Promise<void> {
  const { mutate } = await import('swr');
  await mutate(() => true, undefined, { revalidate: true });
}
