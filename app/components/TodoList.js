import React, {PropTypes} from 'react'
//components
import Todo from 'Todo'

const TodoList = (props) => {
  const {handleCompleteChecked} = props
  return(
    <div className="todo-list">
      {props.todos.map( todo => <Todo key={todo.id} {...todo} handleCompleteChecked={(checked, id) => handleCompleteChecked(checked, id)}/> )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
}

export default TodoList
