export type Actions = ReturnType<typeof setDeviceCategory> | ReturnType<typeof setCurrentPageTitle> | ReturnType<typeof transit>

export const ACTION_TYPE = {
  SET_DEVICE: 'SET_DEVICE',
  TRANSITION_PAGE: 'TRANSITION_PAGE',
  SET_TITLE: 'SET_TITLE',
}

export const setDeviceCategory = () => {
  const category = isMobile() ? 'sp' : 'pc'
  return {
    type: ACTION_TYPE.SET_DEVICE,
    data: {
      device: category
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

const isMobile = () => 
  navigator.userAgent.indexOf('iPhone') > 0 || 
  navigator.userAgent.indexOf('iPad') > 0 || 
  navigator.userAgent.indexOf('iPod') > 0 || 
  navigator.userAgent.indexOf('Android') > 0