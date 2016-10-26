import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

import TodoApp from 'TodoApp'

describe('<TodoApp />', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  describe('rendering check', () => {
    const wrapper = shallow(<TodoApp />)

    it('should render search component', () => {
      expect(wrapper.find('Search')).toExist()
    })
  })
})
