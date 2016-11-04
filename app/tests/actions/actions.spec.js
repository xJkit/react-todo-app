import expect from 'expect'
import * as actions from 'actions'

describe('actions', () => {

  it('should actions exist', () => {
    expect(actions).toExist()
  })

  it('should generate search text action', () => {
    const action = {
      type: 'SEARCH_TERM_BY',
      term: 'Hello, world'
    }
    const res = actions.searchTermBy(action.term)
    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      title: 'things to do',
    }
    const res = actions.addTodo(action.title)
    expect(res).toEqual(action)
  })

  it('should generate show complete action', () => {
    const action = {
      type: 'SHOW_COMPLETE',
      showComplete: false
    }
    const res = actions.showComplete(action.showComplete)
    expect(res).toEqual(action)
  })

  it('should generate complete checked action', () => {
    const action = {
      type: 'COMPLETE_CHECKED',
      id: 'abc',
      checked: true
    }

    const res = actions.completeChecked(action.checked, action.id)
    expect(res).toEqual(action)
  })


})
