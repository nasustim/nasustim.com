import React from 'react'

export interface Props {
  src: string
  width: number
  height: number
}

const Image: React.FC<Props> = ({ src, width, height }) => <img src={src} width={width} height={height} />

export default Image
