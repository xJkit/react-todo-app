import React, {Component} from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <form className="add-todo">
        <input type="text" placeholder="你想做些什麼？" ref="addTodoTerm"/>
        <button className="button expanded primary">新增 Todo </button>
      </form>
    )
  }
}

export default AddTodo
