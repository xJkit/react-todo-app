import React from 'react'
import expect from 'expect'
import {shallow, mount} from 'enzyme'

import Search from 'Search'

describe('<Search />', () => {
  it('should exist', () => {
    expect(Search).toExist()
  })

  it('should call onSearchTermBy with onChange input search', () => {
    const spy = expect.createSpy()
    const wrapper = mount(<Search handleSearchTermBy={spy} />)
    const searchInput = wrapper.find('input.search-bar')
    searchInput.simulate('change')
    expect(spy).toHaveBeenCalled()
  })

  it('should call onSearchTermBy with proper input values', () => {
    const spy = expect.createSpy()
    const wrapper = mount(<Search handleSearchTermBy={spy} />)
    let searchInput = wrapper.find('input.search-bar')
    const searchCheckbox = wrapper.find('input.search-show-complete')
    searchInput.get(0).value="      HeLLo    "
    // searchCheckbox.get(0).checked = true
    searchInput.simulate('change')
    expect(spy).toHaveBeenCalledWith("hello")
  })

  describe('rendering check', () => {
    it('should render search bar', () => {
      const wrapper = shallow(<Search />)
      expect(wrapper.find('input.search-bar').length).toBe(1)
      expect(wrapper.find('input.search-show-complete').length).toBe(1)
    })

  })
})
