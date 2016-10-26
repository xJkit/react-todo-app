import React from 'react'
import {shallow, mount} from 'enzyme'
import expect from 'expect'

import TodoList from 'TodoList'

describe('<TodoList />', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  describe('rendering check', () => {
    it('should render correct Todo items', () =>{
      const todos = [
        {
          id: 1,
          title: "The first todo"
        }, {
          id: 2,
          title: "The second todo"
        }, {
          id: 3,
          title: "The third todo"
        }
      ]

      const wrapper = shallow(<TodoList todos={todos}/>)
      const numberOfTodos = wrapper.find('Todo').length
      expect(numberOfTodos).toBe(todos.length)

    })
  })
})
