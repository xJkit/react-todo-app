import React, {Component, PropTypes} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return(
      <div className="search">
        <input className="search-bar" type="text" placeholder="搜尋 Todos" ref="searchTerm"/>
        <div className="check-row">
          <input className="search-show-complete" type="checkbox" name="show-complete" ref="showComplete"/>
          <p>顯示已完成</p>
        </div>
      </div>
    )
  }
}

export default Search
