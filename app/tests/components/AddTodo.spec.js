import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'

import AddTodo from 'AddTodo'

describe('<AddTodo />', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })
})
