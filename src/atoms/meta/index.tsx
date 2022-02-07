type Props = {
  canonicalUrl: string
  isNoindex: boolean
  title: string
}

const Component: React.VFC<Props> = (props) => (
  <>
    <title>{props.title}</title>
    <link rel='canonical' href={props.canonicalUrl}></link>
    {props.isNoindex ? <meta name='robots' content='noindex,nofollow'></meta> : null}
  </>
)

export default Component
