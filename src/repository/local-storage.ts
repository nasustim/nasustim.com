"use client";

import { useState } from "react";

const localStorageGuard =
  typeof window !== "undefined" ? window.localStorage : null;

/**
 *
 * @param key
 * @returns
 * - null: localStorage is not available (e.g. server-side rendering)
 * - { value, set, remove }: localStorage is available
 *   - value: current value
 *   - set / remove: functions to update / remove the value
 */
export function useLocalStorage<T extends string = string>(key: string) {
  const [value, setValue] = useState<T | null>(
    localStorageGuard?.getItem(key) as T | null,
  );

  if (!localStorageGuard) {
    return null;
  }

  return {
    value,
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
