import { ACTION_TYPE, Actions } from './actions'

interface State {
  deviceType: String;
  location: String;
  title: String;
  metaData: {
    author: String;
    establishedYear: Number;
  };
}

const initialState: State = {
  deviceType: 'desktop',
  location: '/',
  title: '',
  metaData: {
    author: 'Mitsuhiro Hibino',
    establishedYear: 2010
  }
}

export default function reducers (prevState: State = initialState, action: Actions) {
  switch (action.type) {
    case ACTION_TYPE.SET_DEVICE_TYPE:
      return {
        deviceType: action.data.deviceType,
        ...prevState
      }
    case ACTION_TYPE.TRANSITION_PAGE:
      return {
        href: action.data.href,
        ...prevState
      }
    case ACTION_TYPE.SET_TITLE:
      return {
        title: action.data.title,
        ...prevState
      }
    case ACTION_TYPE.SET_META_DATA:
      return {
        metaData: action.data.metaData,
        ...prevState
      }
    default:
      return prevState
  }
}
