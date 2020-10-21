import React from "react"

import { Container } from "./style"

import {connect} from 'react-redux'
import * as store from "../../flux/store"

const mapStateToProps = ({app}: store.State) => ({ deviceType: app.deviceType })

const Article = ({ deviceType, dangerouslySetInnerHTML }) => (
  <Container
    device={deviceType}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  />
)

export default connect(mapStateToProps)(Article)
