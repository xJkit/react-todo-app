import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TodoAPI from 'TodoAPI'
import * as actions from 'actions'

// Load routes
import routes from 'routes'
import TodoApp from 'TodoApp'

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'

// Load actions & store from redux
import configureStore from 'configureStore'
const store = configureStore()
//Initial Todos
const initialTodos = TodoAPI.getTodos('todos')
store.dispatch(actions.setTodos(initialTodos))



ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
