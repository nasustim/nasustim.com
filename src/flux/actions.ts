export type Actions = ReturnType<typeof setDeviceCategory> | ReturnType<typeof setCurrentPageTitle> | ReturnType<typeof transit>

export const ACTION_TYPE = {
  SET_DEVICE_TYPE: 'SET_DEVICE_TYPE',
  TRANSITION_PAGE: 'TRANSITION_PAGE',
  SET_TITLE: 'SET_TITLE',
  SET_META_DATA: 'SET_META_DATA',
}

export const setMetaData = (metaData) => {
  return {
    type: ACTION_TYPE.SET_META_DATA,
    data: {
      metaData
    }
  }
}

export const updateDeviceCategory = () => {
  const deviceType = isMobile() ? 'mobile' : 'desktop'
  return {
    type: ACTION_TYPE.SET_DEVICE_TYPE,
    data: {
      deviceType
    }
  }
}

export const setCurrentPageTitle = ({ title }) => ({
  type: ACTION_TYPE.SET_TITLE,
  data: {
    title,
  },
})

export const transit = ({ href = '/' }) => ({
  type: ACTION_TYPE.TRANSITION_PAGE,
  data: {
    href,
  },
})

const ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
const isMobile = () => !!['iPhone', 'iPad', 'iPod', 'Android'].find(v => ua.indexOf(v) > 0)