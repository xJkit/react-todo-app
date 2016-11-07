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
    // TodoAPI.setTodos(this.state.todos)
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

  // handleAddTodo(title) {
  //   const {todos} = this.state
  //   const newTodos = todos.concat({
  //     id: uuid.v1(),
  //     title: title,
  //     stamp: moment().unix(),
  //     completed: false
  //   })
  //   this.setState({
  //     todos: newTodos
  //   })
  // }
  //
  // handleSearchTermBy(term) {
  //   this.setState({
  //     searchTerm: term
  //   })
  // }
  //
  // handleShowComplete(showComplete) {
  //   this.setState({
  //     showComplete: showComplete
  //   })
  // }
  //
  // handleCompleteChecked(checked, id) {
  //   const {todos} = this.state
  //
  //   const newTodos = todos.map( todo => {
  //     if(todo.id == id){
  //       todo.completed = checked
  //     }
  //     return todo
  //   })
  //   this.setState({
  //     todos: newTodos
  //   })
  // }
}

export default TodoApp
