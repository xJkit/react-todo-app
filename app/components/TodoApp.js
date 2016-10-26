import React, {Component} from 'react'
//components
import Search from 'Search'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'


class TodoApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="container">
          <Search />
          <TodoList />
          <AddTodo />
        </div>
      </div>
    )
  }
}

export default TodoApp
