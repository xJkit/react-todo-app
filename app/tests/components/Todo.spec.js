import React from 'react'
import {shallow, mount} from 'enzyme'
import expect from 'expect'

import Todo from 'Todo'

describe('<Todo />', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should completed after checked',() => {
    const todo = {
      id: "abc",
      title: "A todo title",
    }
    const spy = expect.createSpy()
    const wrapper = mount(<Todo {...todo} handleCompleteChecked={spy}/>)
    const inputCheck = wrapper.find('input')
    inputCheck.get(0).checked = true
    inputCheck.simulate('change')
    expect(spy).toHaveBeenCalledWith(true, "abc")

  })

  describe('rendering check', () => {
    it('should render default title', () => {
      const wrapper = mount(<Todo />)
      expect(wrapper.find('.title').length).toBe(1)
      expect(wrapper.find('.title').text()).toBe('John Appleseed')
    })
  })
})
