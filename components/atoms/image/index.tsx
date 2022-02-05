// 本当はnext/imageに寄せたいが、現状の運用ではあまり旨味がないので保留
// import Image, { ImageLoader } from 'next/image'

type Props = {
  src: string
  size?: {
    width: number
    height: number
  }
}

const Component: React.VFC<Props> = ({ src, size = {} }) => {
  return (
    <Container>
      {/*<Image loader={imageLoader} unoptimized={true} src={src} width={size.width} height={size.height} />*/}
      <img src={src} {...size} />
    </Container>
  )
}

const Container: React.FC = ({ children }) => <span>{children}</span>
// const imageLoader: ImageLoader = (opt) => {
//  const src = opt.src.match('^/*') ? opt.src : `/${opt.src}`
//   return `${process.env.DOMAIN}${src}`
// }

export default Component
