import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

//components
import Todo from 'Todo'

const TodoList = (props) => {
  
  return(
    <div className="todo-list">
    {props.todos.map( todo => <Todo key={todo.id} {...todo} /> )}
    </div>
  )

}



TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
}

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList)
