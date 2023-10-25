import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);
  function handleDismissToast(toast) {
    removeToast(toast.id);
  }

  if (toasts.length === 0) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.toReversed().map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            onDismiss={() => handleDismissToast(toast)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
