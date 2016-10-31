import expect from 'expect'
import TodoAPI from 'TodoAPI'

describe('TodoAPI', () => {

//life cycle hook
  beforeEach(() => {
    localStorage.removeItem("todos") //做任何測試之前都會清空 todos
  })
/***************/


  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('-- setTodos', () => {
    it('should set todos with valid data', () => {
      const todos = [{
        id: "id1",
        title: "the title",
        completed: false
      }]
      TodoAPI.setTodos(todos)
      const actualTodos = JSON.parse(localStorage.getItem("todos"))
      expect(todos).toEqual(actualTodos)
    })
    it('should not set todos with invalid data', () => {
      const todos_bad = {a: "a"}
      TodoAPI.setTodos(todos_bad)
      const actualTodos = JSON.parse(localStorage.getItem("todos"))
      expect(actualTodos).toBe(null)
    })
  })

  describe('-- getTodos', () => {
    it('should get empty array for bad localStorage data', () => {
      const todos_bad = TodoAPI.getTodos("toods")
      expect(todos_bad).toEqual([])
    })
  })
})
