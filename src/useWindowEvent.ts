import { useEffect } from "react";

const useWindowEvent = (event: string, callback: (event: Event) => void) => (
  useEffect(
    () => {
      window.addEventListener(event, callback);
      return () => window.removeEventListener(event, callback);
    },
    [event, callback]
  )
);

export default useWindowEvent;
