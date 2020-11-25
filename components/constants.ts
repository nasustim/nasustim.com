export const MAX_MOBILE_WIDTH = `420px`
export const MAX_TABLET_WIDTH = `880px`

export const StyleFunctions = {
  MOBILE_SIZE: `@media screen and (max-width: ${MAX_MOBILE_WIDTH})`,
  TABLET_SIZE: `@media screen and (max-width: ${MAX_TABLET_WIDTH}) and (min-width: calc(${MAX_MOBILE_WIDTH} + 1px))`, // styled-componentsならscssでも問題ないかも
}
