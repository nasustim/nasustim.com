import React from 'react'
import { Provider } from 'react-redux'
import store from './flux/store'

export default ({element}: {element: JSX.Element | JSX.Element[]}) => <Provider store={store}>{element}</Provider>