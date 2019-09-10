import { useCallback } from "react";

import useDocumentEvent from "./useDocumentEvent";

const useEnterPress = (onEnter: () => void) => {
  useDocumentEvent(
    "keydown",
    useCallback(
      (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          onEnter();
        }
      },
      [onEnter]
    )
  );
};

export default useEnterPress;
