import React from 'react'
import {shallow, mount} from 'enzyme'
import expect from 'expect'

import { Todo } from 'Todo'

describe('<Todo />', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should dispatch completeChecked action after checked',() => {
    const todo = {
      id: "abc",
      title: "A todo title",
    }
    const spy = expect.createSpy()
    const wrapper = mount(<Todo {...todo} dispatch={spy}/>)
    const inputCheck = wrapper.find('input')
    inputCheck.get(0).checked = true
    inputCheck.simulate('change')
    expect(spy).toHaveBeenCalledWith({
      type: 'COMPLETE_CHECKED',
      checked: true,
      id: "abc"
    })
  })
})
