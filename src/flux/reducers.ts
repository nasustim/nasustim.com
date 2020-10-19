import { ACTION_TYPE, Actions } from './actions'

interface State {
  device: String;
  location: String;
  title: String;
}

const initialState: State = {
  device: 'pc',
  location: '/',
  title: 'nasustim.com',
}

export default function reducers (prevState: State = initialState, action: Actions) {
  switch (action.type) {
    case ACTION_TYPE.SET_DEVICE:
      return {
        deviceCategory: action.data.deviceCategory,
        ...prevState,
      }
    case ACTION_TYPE.TRANSITION_PAGE:
      return {
        href: action.data.href,
        ...prevState,
      }
    case ACTION_TYPE.SET_TITLE:
      return {
        title: action.data.title,
        ...prevState,
      }
    default:
      return prevState
  }
}