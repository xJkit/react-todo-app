import { createStore, combineReducers, compose } from 'redux'
import * as reducers from '../reducers/reducers.js'



export const config = () => {
  const rootReducer = combineReducers({
    ...reducers
  })

  const store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
