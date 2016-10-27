import React, {Component} from 'react'
//components
import Search from 'Search'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'


class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      searchTerm: '',
      showComplete: false
    }
  }

  render() {
    return(
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="container">
          <Search handleSearchTermBy={(term, showComplete) => this.handleSearchTermBy(term, showComplete)}/>
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

  handleSearchTermBy(term, showComplete) {
    console.log(`search for: ${term}, completed: ${showComplete}`)
    this.setState({
      searchTerm: term,
      showComplete: showComplete
    })
  }
}

export default TodoApp
