import { useCallback, useEffect, useState } from "react";

const useLazyImport = <T extends any>(onImport: () => Promise<{ default: T }>) => {
  const [imported, setImported] = useState<T | null>(null);
  const onImportCallback = useCallback(onImport, []);

  useEffect(
    () => {
      let cancelled = false;

      onImportCallback().then(module => {
        if (!cancelled) {
          setImported(() => module.default);
        }
      });

      return () => {
        cancelled = true;
      };
    },
    [onImportCallback, setImported]
  );

  return imported;
};

export default useLazyImport;
