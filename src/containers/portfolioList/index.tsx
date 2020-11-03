import React from 'react'

import LineImgList from '../../components/lineImgList'

const PortfolioList = (props) => {
  const works = props.works

  // ToDo: 取り急ぎ、いずれ抜く
  const device: string = 'desktop'
  const columnAmount = device === 'desktop' ? 3 : device === 'tablet' ? 2 : 1

  const lines = divideWorks(works, columnAmount)
  return (
    <React.Fragment>
      <section>
        {lines.map((line) => (
          <div>
            <LineImgList works={line} />
          </div>
        ))}
      </section>
      <Style />
    </React.Fragment>
  )
}

export default PortfolioList

const Style = () => (
  <style jsx>{`
    section {
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    div {
      flex: 1;
    }
  `}</style>
)

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
