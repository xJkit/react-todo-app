import React, {PropTypes, Component} from 'react'

class Todo extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {title, date, time} = this.props

    return(
      <form className="todo">
        <input type="checkbox" ref="todo"/>
        <div className="info">
          <div className="title">{title}</div>
          <div className="stamp">Created {date} @ {time}</div>
        </div>
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
  title: PropTypes.string
}


export default Todo
