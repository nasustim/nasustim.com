import React, { ReactNode } from 'react'

import _Layout from '../layout'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => <_Layout>{children}</_Layout>
export default Layout
