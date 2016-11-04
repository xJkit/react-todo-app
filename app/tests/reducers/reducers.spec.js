import expect from 'expect'
import * as reducers from 'reducers'


describe('Reducers', () => {
  it('should exist', () => {
    expect(reducers).toExist()
  })

  describe('searchTermBy reducer', () => {
    it('should search term by text', () => {
      const action =  {
        type: 'SEARCH_TERM_BY',
        term: '123'
      }
      const res = reducers.searchTermBy('', action)
      expect(res).toEqual(action.term)
    })
  })

  describe('showComplete reducer', () => {
    it('should set the showComplete state to true or false', () => {
      const action = {
        type: 'SHOW_COMPLETE',
        showComplete: true
      }
      const res = reducers.showComplete(false, action)
      expect(res).toEqual(action.showComplete)
    })
  })

  describe('todo reducer', () => {
    it('should add new todo item', () => {
      const action = {
        type: 'ADD_TODO',
        title: 'things to do!'
      }
      const res = reducers.todoReducer([], action)
      expect(res.length).toBe(1)
      expect(res[0].title).toEqual(action.title)
    })

    it('should complete checked', () => {
      const todos = [
        {
          id: 'id-1',
          title: "Walk the dog",
          stamp: '20161010',
          completed: false
        },
        {
          id: 'id-2',
          title: "See the movie",
          stamp: "20161011",
          completed: false
        }
      ]
      const action = {
        type: 'COMPLETE_CHECKED',
        id: 'id-2',
        checked: true
      }
      const res = reducers.todoReducer(todos, action)
      expect(res[1].completed).toBe(true)
    })

  })

})
