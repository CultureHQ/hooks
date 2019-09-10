import { useCallback, useRef } from "react";

import useDocumentEvent from "./useDocumentEvent";

const useClickOutside = <T extends HTMLElement>(onClose: () => void) => {
  const containerRef = useRef<T>(null);
  const callback = useCallback(
    (event: Event) => {
      const container = containerRef.current;

      if (container && event.target instanceof Element && !container.contains(event.target)) {
        onClose();
      }
    },
    [containerRef, onClose]
  );

  useDocumentEvent("click", callback);

  return containerRef;
};

export default useClickOutside;
