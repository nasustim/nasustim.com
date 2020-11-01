const ACTION_TYPES = {
  LOADED: Symbol('loaded')
}

const initialState = {
  isComponentMounted: false,
  location: '/'
}
type Action = {
  type: (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES]
  data: Partial<typeof initialState>
}

type State = typeof initialState

export default function reducer (state: State = initialState, action: Action) {
  const { type, data } = action
  switch ( type ) {
    case ACTION_TYPES.LOADED:
      return Object.assign({}, {
        isComponentMounted: true,
        location: data.location
      }, state)
  }
}

export {
  initialState,
  ACTION_TYPES,
}