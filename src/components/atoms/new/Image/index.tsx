import type { FC } from 'react'

import NextImage from 'next/image'

type Props = {
  src: string
  width: number
  height: number
  alt: string
}

export const Image: FC<Props> = ({ src, width, height, alt }) => {
  return <NextImage src={src} width={width} height={height} alt={alt} />
}
