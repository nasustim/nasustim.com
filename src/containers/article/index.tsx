import React from 'react'

const Article = ({ dangerouslySetInnerHTML }) => (
  <React.Fragment>
    <article dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    <Style />
  </React.Fragment>
)

export default Article

const Style = () => (
  <style jsx>{`
    article {
      padding-left: 7px;
      padding-right: 7px;
      @media (max-width: $max-tablet-size) {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  `}</style>
)
