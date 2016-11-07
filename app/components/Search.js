import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'


class Search extends Component {
  constructor(props) {
    super(props)
  }

  onSearchTermBy() {
    const { dispatch } = this.props
    const term = this.refs.searchTerm.value.trim().toLowerCase()
    dispatch(actions.searchTermBy(term))
  }

  handleShowComplete() {
    const { dispatch } = this.props
    dispatch(actions.showComplete(this.refs.showComplete.checked))
  }

  render() {
    return(
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="搜尋 Todos"
          ref="searchTerm"
          onChange={() => this.onSearchTermBy()}
          />
        <form className="check-row">
            <input className="search-show-complete" id="show-complete" type="checkbox" name="show-complete" ref="showComplete" onChange={::this.handleShowComplete}/>
            <label htmlFor="show-complete" >顯示已完成</label>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
}

export default connect()(Search)
