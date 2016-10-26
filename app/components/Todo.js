import React, {PropTypes, Component} from 'react'

class Todo extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form className="todo">
        <input type="checkbox" ref="todo"/>
        <div className="info">
          <div className="title">{this.props.title}</div>
          <div className="stamp">Created {this.props.date} @ {this.props.time}</div>
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
