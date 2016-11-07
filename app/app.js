import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Load routes
import routes from 'routes'
import TodoApp from 'TodoApp'

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'

// Load actions & store from redux
import * as actions from 'actions'
import * as configureStore from 'configureStore'
const store = configureStore.config()

store.dispatch(actions.addTodo('A new todo from dispatche action'))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
