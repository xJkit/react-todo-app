const TodoAPI = {
  setTodos: (todos) => {
    //todos is an array of objects
    if ( Array.isArray(todos) ){
      const strTodos = JSON.stringify(todos)
      localStorage.setItem("todos", strTodos)
    }
  },
  getTodos: (key) => {
    const strTodos = localStorage.getItem(key)
    let todos = []
    try {
      todos = JSON.parse(strTodos)
    } catch(err) {
      console.log(`${err}: some problem in parsing todos`)
    }

    return Array.isArray(todos) ? todos : []

  },
  filteredTodos: (todos, searchTerm, showComplete) => {
    let filteredTodos = todos
    // filter with showComplete
    filteredTodos = filteredTodos.filter( (todo) => {
      return (
        !todo.completed || showComplete
      )
    })

    //filter with searchTerm
    filteredTodos = filteredTodos.filter( (todo) => {
      const searchText = searchTerm.toLowerCase()
      return (
        searchText.length == 0 || todo.title.toLowerCase().indexOf(searchText) > -1
      )
    })

    // sort todos with non-complete first
    filteredTodos.sort((a,b) => {
      if (!a.completed && b.completed){
        return -1
      } else if (a.completed && !b.completed){
        return 1
      } else {
        return 0
      }
    })

    return filteredTodos
  }
}

export default TodoAPI
