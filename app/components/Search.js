import React, {Component, PropTypes} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  onSearchTermBy() {
    const { handleSearchTermBy } = this.props
    const term = this.refs.searchTerm.value.trim().toLowerCase()
    handleSearchTermBy(term)
  }

  handleShowComplete(evt) {
    const { handleShowComplete } = this.props
    handleShowComplete(this.refs.showComplete.checked)
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
            <input className="search-show-complete" id="show-complete" type="checkbox" name="show-complete" ref="showComplete" onChange={() => this.handleShowComplete()}/>
            <label htmlFor="show-complete" >顯示已完成</label>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearchTermBy: PropTypes.func,
  handleShowComplete: PropTypes.func
}

export default Search
