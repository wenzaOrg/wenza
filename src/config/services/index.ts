import axios, { AxiosInstance } from "axios";

import { baseURL } from "@/config/constants";

export { baseURL };
import { showError } from "@/config/helpers";

interface BaseRequestInterface extends AxiosInstance {
  setToken: (token: string) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const BaseRequest: BaseRequestInterface = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

let isRefreshing = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
BaseRequest.setToken = (token: any) => {
  if (token)
    BaseRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

BaseRequest.interceptors.request.use((config) => {
  if (config.url && !config.url.startsWith("http")) {
    const cleanUrl = config.url.replace(/^\/?(api\/v1\/?)?/, "");
    config.url = `/api/v1/${cleanUrl}`;
  }
  return config;
});

BaseRequest.interceptors.response.use(
  (response) => response?.data,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      if (!isRefreshing) {
        originalRequest._retry = true;
        isRefreshing = true;
        try {
        } catch (error) {
          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }
      }
    }
    if (error?.message === "Network Error")
      return Promise.reject("Server network down time");
    return Promise.reject(error?.response?.data || error?.message);
  },
);

export default BaseRequest;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseNetworkError = (error: any, processLogout = false) => {
  let message = error,
    _logOutUser = false;
  const { status, message: msg } = error || {};
  if (status === 500)
    message = "Server could not process your request, please try again";
  if (status === 401 || (msg && msg.includes("Unauthenticated")))
    _logOutUser = true;
  if (msg) message = msg;
  if (Array.isArray(msg)) message = msg.join(", ");

  if (processLogout) {
    //dispatch logout
  }
  return [message, {}, _logOutUser];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const catchError = (error: any, processLogout = true) => {
  const [message] = parseNetworkError(error, processLogout);
  if (message) {
    showError(String(message));
  }
};
