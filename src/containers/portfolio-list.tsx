import React from 'react'
import styled from 'styled-components'

import LineImgList from '../components/line-img-list'

import { sassVariableToValue as v } from '../utils/style'
import { Sizes } from '../style/constants.ts'

const PortfolioList = (props) => {
  const works = props.works

  // ToDo: 取り急ぎ、いずれ抜く
  // ToDo: オブザーバでサイズ変更監視したい
  const w = typeof window !== 'undefined' ? window.innerWidth : 980
  const device: string = w > v(Sizes.MAX_TABLET_SIZE) ? 'desktop' : w > v(Sizes.MAX_MOBILE_SIZE) ? 'tablet' : 'mobile'
  const columnAmount = device === 'desktop' ? 3 : device === 'tablet' ? 2 : 1

  const lines = divideWorks(works, columnAmount)
  return (
    <Wrapper>
      {lines.map((line, index) => (
        <div key={`portfolio-list--${index}`}>
          <LineImgList works={line} />
        </div>
      ))}
    </Wrapper>
  )
}

export default PortfolioList

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  div {
    flex: 1;
    @media screen and (min-width: ${Sizes.DEFAULT_PAGE_WIDTH}) {
      margin: 0 1.3px;
    }
  }
`

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
