import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import moment from 'moment'

const Todo = (props) => {
  const {title, stamp, id, completed, dispatch} = props

  const onCompleteChecked = (evt) => {
    const checked = evt.target.checked
    const id = evt.target.id
    dispatch(actions.completeChecked(checked, id))
  }

  const prettyStamp = (timeStamp) => (
    moment.unix(timeStamp).format('MMM D, Y @ h:mm:a')
  )

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
        <div className="stamp">Created {prettyStamp(stamp)}</div>
      </label>
    </form>
  )
}

Todo.defaultProps = {
  title: "John Appleseed",
  stamp: 1477897915
}

Todo.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
  stamp: PropTypes.number
}

export default connect()(Todo)
