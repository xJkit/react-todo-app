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

export class TodoApp extends Component {


  componentDidUpdate() {
    TodoAPI.setTodos(this.props.todos)
    console.log('componentDidUpdate!')
  }

  render() {
    console.log('component rendered!')
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
  state => ({
    todos: state.todos
  })
)(TodoApp)
