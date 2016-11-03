import uuid from 'node-uuid'

export const searchTermBy = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_TERM_BY':
      return action.term
    default:
      return state
  }
}


export const addTodo = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid.v1(),
          title: action.title,
          stamp: action.stamp,
          completed: false
        }
      ]
    default:
      return state
  }
}


export const showComplete = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_COMPLETE':
      return action.showComplete
    default:
      return state
  }
}
