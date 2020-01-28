import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.4,
  headerFontFamily: [
    "Verdana",
    "游ゴシック",
    "游ゴシック体",
    "YuGothic",
    "Yu Gothic",
    "Roboto",
    "sans-serif",
  ],
  bodyFontFamily: [
    "游明朝", 
    "游明朝体",
    "YuMincho",
    "Yu Mincho",
    "serif",
  ],
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

