import Image from 'next/image'

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
      <Image src={src} width={size.width} height={size.height} />
    </Container>
  )
}

const Container: React.FC<{}> = ({ children }) => <span>{children}</span>

export default Component
