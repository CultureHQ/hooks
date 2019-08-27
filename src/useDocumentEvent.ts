import { useEffect } from "react";

type Callback = (event: Event) => void;

const useDocumentEvent = (event: string, callback: Callback): ReturnType<typeof useEffect> => (
  useEffect(
    () => {
      document.addEventListener(event, callback);
      return () => document.removeEventListener(event, callback);
    },
    [event, callback]
  )
);

export default useDocumentEvent;
