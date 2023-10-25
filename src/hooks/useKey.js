import React from "react";

function useKey(key, callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
}

export function useEscapeKey(callback) {
  useKey("Escape", callback);
}

export default useKey;
