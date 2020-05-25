import { useCallback } from "react";

import useDocumentEvent from "./useDocumentEvent";

const useEnterPress = (onEnter: () => void): void => {
  useDocumentEvent(
    "keydown",
    useCallback(
      (event: Event) => {
        if (event instanceof KeyboardEvent && event.key === "Enter") {
          onEnter();
        }
      },
      [onEnter]
    )
  );
};

export default useEnterPress;
