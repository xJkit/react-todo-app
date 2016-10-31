import React, {PropTypes, Component} from 'react'

const Todo = (props) => {
  const {title, date, time, id, completed, handleCompleteChecked} = props

  const onCompleteChecked = (evt) => {
    const checked = evt.target.checked
    const id = evt.target.id
    handleCompleteChecked(checked, id)
  }

  return(
    <form className="todo">
      <input
        id={id}
        type="checkbox"
        onChange={(evt) => onCompleteChecked(evt)}
        checked={completed}
        />
      <label htmlFor={id} className="info">
        <div className="title">{title}</div>
        <div className="stamp">Created {date} @ {time}</div>
      </label>
    </form>
  )
}

Todo.defaultProps = {
  title: "John Appleseed",
  date: "Mar 21st",
  time: "9:04 am"
}

Todo.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
  date: PropTypes.string,
  time: PropTypes.string,
  handleCompleteChecked: PropTypes.func
}

export default Todo
