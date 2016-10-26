import React from 'react'
import {shallow, mount} from 'enzyme'
import expect from 'expect'

import Todo from 'Todo'

describe('<Todo />', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  describe('rendering check', () => {
    it('should render default title', () => {
      const wrapper = mount(<Todo />)
      expect(wrapper.find('.title').length).toBe(1)
      expect(wrapper.find('.title').text()).toBe('John Appleseed')
    })
  })
})
