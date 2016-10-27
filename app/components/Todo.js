import React, {PropTypes, Component} from 'react'

class Todo extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {title, date, time, id} = this.props

    return(
      <form className="todo">
        <input id={`todo${id}`} type="checkbox" ref="todo"/>
        <label htmlFor={`todo${id}`} className="info">
          <div className="title">{title}</div>
          <div className="stamp">Created {date} @ {time}</div>
        </label>
      </form>
    )
  }
}

Todo.defaultProps = {
  title: "John Appleseed",
  date: "Mar 21st",
  time: "9:04 am"
}

Todo.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number
}


export default Todo
