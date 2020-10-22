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

export const updateDeviceCategory = ({ deviceType }) => {
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