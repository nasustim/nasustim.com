"use client";

import { useCallback, useEffect, useState } from "react";

const localStorageGuard =
  typeof window !== "undefined" ? window.localStorage : null;

export function useLocalStorage<T extends string = string>(key: string) {
  const [value, setValue] = useState<T | null>(null);

  const refresh = useCallback(() => {
    setValue(localStorageGuard?.getItem(key) as T | null);
  }, [key]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  if (!localStorageGuard) {
    return null;
  }

  const localStorage = localStorageGuard;

  return {
    value,
    set: (value: T) => {
      localStorage.setItem(key, value);
      refresh();
    },
    remove: () => {
      localStorage.removeItem(key);
      refresh();
    },
  };
}
