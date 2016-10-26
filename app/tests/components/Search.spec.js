import React from 'react'
import expect from 'expect'
import {shallow, mount} from 'enzyme'

import Search from 'Search'

describe('<Search />', () => {
  it('should exist', () => {
    expect(Search).toExist()
  })

  describe('rendering check', () => {
    it('should render search bar', () => {
      const wrapper = shallow(<Search />)
      expect(wrapper.find('input.search-bar').length).toBe(1)
      expect(wrapper.find('input.search-show-complete').length).toBe(1)
    })

  })
})
