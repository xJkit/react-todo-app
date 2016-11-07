import { createStore, combineReducers, compose } from 'redux'
import * as reducers from '../reducers/reducers.js'



const configureStore = () => {
  const rootReducer = combineReducers({
    ...reducers
  })

  const store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}

export default configureStore
