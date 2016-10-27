import React from 'react'
import expect from 'expect'
import {shallow, mount} from 'enzyme'

import AddTodo from 'AddTodo'

describe('<AddTodo />', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should add todo item with valid input', () => {
    const spy = expect.createSpy()
    const wrapper = mount(<AddTodo handleAddTodo={spy}/>)
    wrapper.find('input').get(0).value = "123"
    wrapper.find('form').simulate('submit')
    expect(spy).toHaveBeenCalledWith('123')
    expect(wrapper.find('input').get(0).value).toBe('')
  })
  
  it('should not add todo item with invalid input', () => {
    const spy = expect.createSpy()
    const wrapper = mount(<AddTodo handleAddTodo={spy} />)
    wrapper.find('input').get(0).value = ""
    wrapper.find('form').simulate('submit')
    expect(spy).toNotHaveBeenCalled()
  })
})
