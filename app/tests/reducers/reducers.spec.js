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
})
