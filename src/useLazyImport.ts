import { useCallback, useEffect, useState } from "react";

const useLazyImport = <T extends any>(onImport: () => Promise<{ default: T }>): T | null => {
  const [imported, setImported] = useState<T | null>(null);

  // We're going to explicitly "lock-in" the onImport function that's given to
  // useLazyImport. This function should hopefully explicitly not change.
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
