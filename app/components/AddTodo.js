import React, {PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'actions'


const AddTodo = (props) => {

  const onAddTodo = (evt) => {
    evt.preventDefault()
    const { addTodoActions } = props
    const newTodoTitle = evt.target.elements[0].value
    if (newTodoTitle.length > 0){
      evt.target.elements[0].value = ""
      addTodoActions(newTodoTitle)
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
}

export default connect(
  () => ({}), dispatch => ({
    addTodoActions: bindActionCreators(actions.addTodo, dispatch)
  })
)(AddTodo)
