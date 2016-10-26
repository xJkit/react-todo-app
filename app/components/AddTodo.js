import React, {PropTypes} from 'react'

const AddTodo = (props) => {

  const onAddTodo = (evt) => {
    evt.preventDefault()
    const {handleAddTodo} = props
    const newTodoItem = evt.target.elements[0].value
    if (newTodoItem.length > 0){
      evt.target.elements[0].value = ""
      handleAddTodo(newTodoItem)
    } else {
      evt.target.elements[0].focus()
    }
  }

  return(
    <form className="add-todo" onSubmit={(evt) => onAddTodo(evt)}>
      <input type="text" placeholder="你想做些什麼？" />
      <button className="button expanded primary">新增 Todo </button>
    </form>
  )
}

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func
}

export default AddTodo
