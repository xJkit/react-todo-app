import React, {Component} from 'react'
//components
import Search from 'Search'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'


class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  render() {
    return(
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="container">
          <Search />
          <hr/>
          <TodoList todos={this.state.todos}/>
          <AddTodo handleAddTodo={(todo) => this.handleAddTodo(todo)}/>
        </div>
      </div>
    )
  }

  handleAddTodo(title) {
    const {todos} = this.state
    const numberOfTodos = todos.length
    const newTodos = todos.concat({
      id: numberOfTodos + 1,
      title: title
    })
    this.setState({
      todos: newTodos
    })
  }
}

export default TodoApp
