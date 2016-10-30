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

  }
}

export default TodoAPI
