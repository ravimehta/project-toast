import React from "react";

import uuidv4 from "../../utils/uuid";

const INITIAL_TOASTS = [
  {
    id: "32bbc2a8-65ba-4d5d-b56c-37938a593374",
    variant: "notice",
    message: "This is the first toast",
  },
  {
    id: "0ba38859-2a9c-42c8-b2a6-35f544022f76",
    variant: "error",
    message: "This is the second toast",
  },
];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState(INITIAL_TOASTS);

  const addToast = React.useCallback(
    (variant, message) => {
      setToasts([...toasts, { id: uuidv4(), variant, message }]);
    },
    [toasts]
  );

  const removeToast = React.useCallback(
    (id) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
