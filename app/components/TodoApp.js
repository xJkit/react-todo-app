import React, {Component} from 'react'
import uuid from 'node-uuid'
//components
import Search from 'Search'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
//APIs
import TodoAPI from 'TodoAPI'


class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: TodoAPI.getTodos("todos"),
      searchTerm: '',
      showComplete: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    TodoAPI.setTodos(this.state.todos)
  }

  render() {
    return(
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="container">
          <Search handleSearchTermBy={(term, showComplete) => this.handleSearchTermBy(term, showComplete)}/>
          <hr/>
          <TodoList
            todos={this.state.todos}
            handleCompleteChecked={(checked, id) => this.handleCompleteChecked(checked, id)}
            />
          <AddTodo handleAddTodo={(todo) => this.handleAddTodo(todo)}/>
        </div>
      </div>
    )
  }

  handleAddTodo(title) {
    const {todos} = this.state
    const newTodos = todos.concat({
      id: uuid.v1(),
      title: title,
      completed: false
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

  handleCompleteChecked(checked, id) {
    const {todos} = this.state
    const newTodos = todos.map( (todo) => {
      if(todo.id == id){
        todo.completed = checked
        return todo
      } else {
        return todo
      }
    })

    this.setState({
      todos: newTodos
    })
  }



}

export default TodoApp
