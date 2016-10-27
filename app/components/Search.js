import React, {Component, PropTypes} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return(
      <div className="search">
        <input className="search-bar" type="text" placeholder="搜尋 Todos" ref="searchTerm"/>
        <form className="check-row">
            <input className="search-show-complete" id="show-complete" type="checkbox" name="show-complete" ref="showComplete"/>
            <label htmlFor="show-complete" >顯示已完成</label>
        </form>
      </div>
    )
  }
}

export default Search
