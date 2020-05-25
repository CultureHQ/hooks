import { useEffect } from "react";

const useDocumentEvent = (event: string, callback: (event: Event) => void): void => (
  useEffect(
    () => {
      document.addEventListener(event, callback);
      return () => document.removeEventListener(event, callback);
    },
    [event, callback]
  )
);

export default useDocumentEvent;
