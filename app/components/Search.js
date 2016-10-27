import React, {Component, PropTypes} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  onSearchTermBy(evt) {
    evt.preventDefault()
    const { handleSearchTermBy } = this.props
    const term = this.refs.searchTerm.value
    const showComplete = this.refs.showComplete.checked

    handleSearchTermBy(term, showComplete)
  }

  render() {
    return(
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="搜尋 Todos"
          ref="searchTerm"
          onChange={(evt) => this.onSearchTermBy(evt)}
          />
        <form className="check-row">
            <input className="search-show-complete" id="show-complete" type="checkbox" name="show-complete" ref="showComplete"/>
            <label htmlFor="show-complete" >顯示已完成</label>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearchTermBy: PropTypes.func
}

export default Search
