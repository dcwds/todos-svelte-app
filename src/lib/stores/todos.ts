import { writable } from "svelte/store"

export type Todo = {
  id: number
  message: string
  completed: boolean
}

// use local storage copy of todos, otherwise empty array
function getInitialTodoStore() {
  const storedTodos = localStorage.getItem("todos")

  return storedTodos ? JSON.parse(storedTodos) : []
}

const todos = writable<Todo[] | []>(getInitialTodoStore())

todos.subscribe((value) => {
  console.log(value)

  if (window) {
    // create a copy of todos in localStorage so todos persist
    localStorage.setItem("todos", JSON.stringify(value))
  }
})

export default todos
