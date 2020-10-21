import React from "react"
import { Container, Column } from "./style"

import LineImgList from "../../molecules/lineImgList"

import {connect} from 'react-redux'
import * as store from "../../flux/store"

const mapStateToProps = ({app}: store.State) => ({ deviceType: app.deviceType })

type Props = ReturnType<typeof mapStateToProps> & { works: any }

const PortfolioList: React.FC<Props> = props => {
  const device = props.deviceType
  const works = props.works

  switch (device) {
    case "desktop":
      const desktopLine = divideWorks(works, 3)
      return (
        <Container>
          <Column>
            <LineImgList device={device} works={desktopLine[0]} />
          </Column>
          <Column>
            <LineImgList device={device} works={desktopLine[1]} />
          </Column>
          <Column>
            <LineImgList device={device} works={desktopLine[2]} />
          </Column>
        </Container>
      )
    case "tablet":
      const tabletLine = divideWorks(works, 2)
      return (
        <Container>
          <Column>
            <LineImgList device={device} works={tabletLine[0]} />
          </Column>
          <Column>
            <LineImgList device={device} works={tabletLine[1]} />
          </Column>
        </Container>
      )
    default:
      return (
        <Container>
          <Column>
            <LineImgList device={device} works={works} />
          </Column>
        </Container>
      )
  }
}

export default connect(mapStateToProps, ()=>({}))(PortfolioList)

function divideWorks(works, lineCount) {
  let w = [[], [], []].slice(0, lineCount)
  let count = [0, 0, 0].slice(0, lineCount)

  for (const v of works) {
    const minLine = count.indexOf(Math.min(...count))

    count[minLine] += v.imgHeight
    w[minLine].push(v)
  }

  return w
}
