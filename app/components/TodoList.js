import React, {PropTypes} from 'react'
//components
import Todo from 'Todo'

const TodoList = (props) => {
  return(
    <div className="todo-list">
      <Todo title="Film introduction video" date="Jun 27th" time="12:11 pm" />
      <Todo />
    </div>
  )
}

export default TodoList
