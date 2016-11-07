import uuid from 'node-uuid'
import moment from 'moment'
// TodoAPI interact with localStorage


export const term = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_TERM_BY':
      return action.term
    default:
      return state
  }
}

export const todos = (state = [], action) => {



  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid.v1(),
          title: action.title,
          stamp: moment().unix(),
          completed: false
        }
      ]

    case 'COMPLETE_CHECKED':
      return state.map( todo => {
          if (todo.id == action.id){
            return {
              ...todo,
              completed: action.checked
            }
          } else {
            return todo
          }
        })

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
