import React, {PropTypes} from 'react'
//components
import Todo from 'Todo'

const TodoList = (props) => {

  return(
    <div className="todo-list">
      {props.todos.map( todo => <Todo key={1} {...todo} /> )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
}

export default TodoList
