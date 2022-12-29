import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'
import { actions } from '../redux/slices/page'

import Index from '../components/templates/index'

type Props = SuperPageProps

const Page: React.FC<Props> = (props) => {
  const prevPath = useSelector((state: RootState) => state.page.path)
  const dispatch = useDispatch()
  useEffect(() => {
    if (props.meta.canonicalPath !== prevPath) {
      dispatch(actions.transition(props.meta.canonicalPath))
    }
  }, [])

  return <Index />
}

export default Page

export const getStaticProps = () => ({
  props: {
    meta: {
      canonicalPath: '/',
      isNoindex: false,
    },
  },
})
