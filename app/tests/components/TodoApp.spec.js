import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

import TodoApp from 'TodoApp'

describe('<TodoApp />', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })


  it('should add todo items to the state via handleAddTodo', () => {
    const wrapper = shallow(<TodoApp />)
    const title = "A todo title here..."
    wrapper.setState({todos: []})
    wrapper.instance().handleAddTodo(title)
    expect(wrapper.state('todos').length).toBe(1)
    expect(wrapper.state('todos')[0].title).toBe(title)
  })


  describe('rendering check', () => {
    const wrapper = shallow(<TodoApp />)

    it('should render search component', () => {
      expect(wrapper.find('Search')).toExist()
    })
  })
})
