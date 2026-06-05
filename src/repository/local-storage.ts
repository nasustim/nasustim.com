"use client";

import { useEffect, useState } from "react";

const localStorageGuard =
  typeof window !== "undefined" ? window.localStorage : null;

/**
 *
 * @param key
 * @returns
 * - null: localStorage is not available (e.g. server-side rendering)
 * - { value, isLoading, set, remove }: localStorage is available
 *   - value: current value
 *   - isLoading: boolean indicating if the value is being loaded
 *   - set / remove: functions to update / remove the value
 */
export function useLocalStorage<T extends string = string>(key: string) {
  const [value, setValue] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorageGuard) return;
    const storedValue = localStorageGuard.getItem(key) as T | null;
    setValue(storedValue);
    setIsLoading(false);
  }, [key]);

  if (!localStorageGuard) {
    return null;
  }

  return {
    value,
    isLoading,
    set: (value: T) => {
      localStorageGuard?.setItem(key, value);
      setValue(value);
    },
    remove: () => {
      localStorageGuard?.removeItem(key);
      setValue(null);
    },
  };
}
