import { useEffect } from "react";

type Callback = (event: Event) => void;

const useWindowEvent = (event: string, callback: Callback): ReturnType<typeof useEffect> => (
  useEffect(
    () => {
      window.addEventListener(event, callback);
      return () => window.removeEventListener(event, callback);
    },
    [event, callback]
  )
);

export default useWindowEvent;
