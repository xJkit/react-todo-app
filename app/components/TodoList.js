import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoAPI from 'TodoAPI'

//components
import Todo from 'Todo'

const TodoList = ({todos, showComplete, term}) => {

  const renderTodoItem = () => {
    const newTodos = TodoAPI.filteredTodos(todos, term, showComplete)
    return newTodos.map( todo => <Todo key={todo.id} {...todo} /> )
  }


  return(
    <div className="todo-list">
    {renderTodoItem()}
    </div>
  )
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  showComplete: PropTypes.bool,
  term: PropTypes.string
}

export default connect(
  (state) => {
    return {
      todos: state.todos,
      showComplete: state.showComplete,
      term: state.term
    }
  }
)(TodoList)
