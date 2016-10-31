import React, {PropTypes} from 'react'
import moment from 'moment'

const AddTodo = (props) => {

  const onAddTodo = (evt) => {
    evt.preventDefault()
    const {handleAddTodo} = props
    const newTodoTitle = evt.target.elements[0].value
    const currentStamp = moment().unix()
    if (newTodoTitle.length > 0){
      evt.target.elements[0].value = ""
      handleAddTodo(newTodoTitle, currentStamp)
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
