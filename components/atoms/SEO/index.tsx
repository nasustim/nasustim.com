type Props = {
  canonicalUrl: string
}

const Component: React.VFC<Props> = (props) => (
  <>
    <link rel='canonical' href={props.canonicalUrl}></link>
  </>
)

export default Component
