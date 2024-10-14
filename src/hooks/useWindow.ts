import { useSyncExternalStore } from 'react'

const subscribeOnResizeWindow = (callback: () => void) => {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

export function useWindow() {
  const innerWidth = useSyncExternalStore(
    subscribeOnResizeWindow,
    () => {
      return window.innerWidth
    },
    () => 0,
  )
  const innerHeight = useSyncExternalStore(
    subscribeOnResizeWindow,
    () => {
      return window.innerHeight
    },
    () => 0,
  )

  return {
    innerWidth,
    innerHeight,
  }
}
