import React from 'react'

const style: string = `
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
`

const GlobalStyle: React.FC<{}> = () => (
  <style jsx global>
    {style}
  </style>
)
export default GlobalStyle
