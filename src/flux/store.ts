import { combineReducers, createStore } from 'redux'
import reducers from './reducers'

const reducer = combineReducers<{
  app: ReturnType<typeof reducers>
}>({ app: reducers })

export type State = ReturnType<typeof reducer>
export default createStore(reducer)