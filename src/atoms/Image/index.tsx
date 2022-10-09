import React from 'react'
import { BaseProps } from './const'

const Image: React.FC<BaseProps> = ({ src, width, height }) => <img src={src} width={width} height={height} />

export default Image
