export const MAX_MOBILE_WIDTH = `380px`
export const MAX_TABLET_WIDTH = `900px`

export const StyleFunctions = {
  MOBILE_SIZE: `@media screen and (max-width: ${MAX_MOBILE_WIDTH})`,
  TABLET_SIZE: `@media screen and (max-width: ${MAX_TABLET_WIDTH}) and (min-width: ${MAX_MOBILE_WIDTH} + 1px)`,
}
