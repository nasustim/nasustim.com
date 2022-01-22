type Props = {
  canonicalUrl: string
  isNoindex: boolean
}

const Component: React.VFC<Props> = (props) => (
  <>
    <link rel='canonical' href={props.canonicalUrl}></link>
    {props.isNoindex ? <meta name='robots' content='noindex,nofollow'></meta> : null}
  </>
)

export default Component
