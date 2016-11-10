import React, {Component} from 'react'
import uuid from 'node-uuid'
import moment from 'moment'
import { connect } from 'react-redux'
//components
import Search from 'Search'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
//APIs
import TodoAPI from 'TodoAPI'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   todos: TodoAPI.getTodos("todos"),
    //   searchTerm: '',
    //   showComplete: false
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    TodoAPI.setTodos(prevProps.todos)
  }

  render() {
    // const {todos, searchTerm, showComplete} = this.state
    // const filteredTodos = TodoAPI.filteredTodos(todos, searchTerm, showComplete)
    return(
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="container">
          <Search />
          <hr />
          <TodoList />
          <AddTodo />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    todos: state.todos
  })
)(TodoApp)
