'use client'

import { useWindow } from '@/hooks/useWindow'
import { FC, useEffect, useMemo, useState } from 'react'
import { Animation } from './animation'

const ID = 'background-animation'

export const BackgroundAnimation: FC = () => {
  const { innerWidth, innerHeight } = useWindow()
  const [animationInstance, setAnimationInstance] = useState<Animation | null>(null)

  const longSide = useMemo<number>(() => Math.max(innerWidth, innerHeight), [innerWidth, innerHeight])

  useEffect(() => {
    animationInstance?.updateScene(longSide, longSide)
  }, [longSide])

  if (!animationInstance && longSide) {
    setAnimationInstance(new Animation(longSide, longSide, ID))
  }

  return <div id={ID} className={`w-[${longSide}px] h-[${longSide}px]`} />
}
