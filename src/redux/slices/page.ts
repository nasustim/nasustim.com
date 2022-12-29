import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface PageState {
  path: string
}

const initialState: PageState = {
  path: '/',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    transition: (state, action: PayloadAction<string>) => {
      state.path = action.payload
    },
  },
})

export const actions = pageSlice.actions
export const reducer = pageSlice.reducer
