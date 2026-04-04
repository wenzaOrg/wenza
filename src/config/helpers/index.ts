import { toast, type ToastOptions, Slide } from "react-toastify";
import { FiCheckCircle, FiXCircle, FiInfo, FiAlertTriangle, FiX } from "react-icons/fi";
import React from "react";

type NotificationType = "success" | "error" | "info" | "warning";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomCloseButton = ({ closeToast }: any) => {
  return React.createElement(
    "button",
    {
      onClick: closeToast,
      className: "p-1 text-gray-400 hover:text-gray-700 transition-colors"
    },
    React.createElement(FiX, { className: "w-[18px] h-[18px]" })
  );
};

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Slide,
  closeButton: CustomCloseButton,
};

const icons: Record<NotificationType, () => React.ReactNode> = {
  success: () => React.createElement(FiCheckCircle, { className: "w-6 h-6 text-success-500 pl-2 ml-1" }),
  error: () => React.createElement(FiXCircle, { className: "w-6 h-6 text-error-500 pl-2 ml-1" }),
  info: () => React.createElement(FiInfo, { className: "w-6 h-6 text-blue-500 pl-2 ml-1" }),
  warning: () => React.createElement(FiAlertTriangle, { className: "w-6 h-6 text-warning-500 pl-2 ml-1" }),
};

const showMessage = (
  message: string,
  type: NotificationType,
  options: ToastOptions = {}
): void => {
  toast[type](
    React.createElement(
      "div",
      { className: "text-[15px] font-medium text-gray-900 px-1.5 leading-snug" },
      message
    ), 
    { 
      ...defaultOptions, 
      icon: icons[type],
      ...options 
    }
  );
};

export const showSuccess = (message: string, options: ToastOptions = {}): void =>
  showMessage(message, "success", options);

export const showError = (message: string, options: ToastOptions = {}): void =>
  showMessage(message, "error", options);

export const showInfo = (message: string, options: ToastOptions = {}): void =>
  showMessage(message, "info", options);

export const showWarning = (message: string, options: ToastOptions = {}): void =>
  showMessage(message, "warning", options);
