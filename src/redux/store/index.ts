import { configureStore } from '@reduxjs/toolkit'
import { reducer as pageReducer } from '../slices/page'

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
