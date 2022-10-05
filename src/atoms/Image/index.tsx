import React from 'react'
import NextImage from 'next/image'

interface Props {
  src: string
  width: number
  height: number
}

const Image: React.FC<Props> = ({ src, width, height }) => <NextImage src={src} width={width} height={height} />

export default Image
