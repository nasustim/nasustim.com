import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

const styleTemplate = `
  width: 100%;
  margin: 12px 0;
`

export const FullWidthContainer = styled.div([styleTemplate])
export const CenteredHeading = styled.h1([styleTemplate + `text-align: center;`])
export const RightAlignedText = styled.p([styleTemplate + `text-align: right;`])