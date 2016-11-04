
export const searchTermBy = (term) => {
  return {
    type: 'SEARCH_TERM_BY',
    term
  }
}

export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title
  }
}

export const showComplete = (showComplete) => {
  return {
    type: 'SHOW_COMPLETE',
    showComplete
  }
}

export const completeChecked = (checked, id) => {
  return {
    type: 'COMPLETE_CHECKED',
    checked,
    id
  }
}
