export const useTodos = () => useState<Todo[]>("todos", () => [])

export const useFetchTodos = async () => {
  // await useFetch("")
  const todoStore = useTodos()
  const todo: Todo = { name: "Learn TS", done: false }
  todoStore.value = [todo]
}

export const addTodo = (todo: Todo) => {
  const todoStore = useTodos()
  todoStore.value.push(todo)
}

export interface Todo {
  name: String
  done: Boolean
}
