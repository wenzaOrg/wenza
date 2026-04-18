import axios from 'axios';

/**
 * Base Axios instance for all API calls.
 *
 * - Auto-prefixes /api/v1/ to all request URLs
 * - Reads the bearer token from Redux store on every request
 * - The 401/Unauthenticated logout trigger lives in useRequest.ts
 *
 * Per wenza/README.md §7.
 */
const BaseRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

// Request interceptor — attach the bearer token from localStorage (Redux-persisted)
BaseRequest.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    try {
      const persisted = localStorage.getItem('persist:wenza-auth');
      if (persisted) {
        const parsed = JSON.parse(persisted) as { token?: string };
        const token = parsed.token ? JSON.parse(parsed.token) : null;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch {
      // Silently ignore localStorage parse errors
    }
  }
  return config;
});

export default BaseRequest;
