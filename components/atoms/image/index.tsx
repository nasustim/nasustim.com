import Image, { ImageLoader } from 'next/image'

type Props = {
  src: string
  size: {
    width: number
    height: number
  }
}

const Component: React.VFC<Props> = ({ src, size }) => {
  return (
    <Container>
      <Image loader={imageLoader} src={src} width={size.width} height={size.height} />
    </Container>
  )
}

const Container: React.FC = ({ children }) => <span>{children}</span>
const imageLoader: ImageLoader = (opt) => {
  const src = opt.src.match('^/*') ? opt.src : `/${opt.src}`
  return `${process.env.DOMAIN}${src}`
}

export default Component
