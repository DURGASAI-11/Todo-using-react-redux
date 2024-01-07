import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload
      })
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload

      const todoIndex = state.todos.findIndex((todo) => {
        return todo.id === id
      })
      const updateTodos = [...state.todos]
      updateTodos[todoIndex] = { ...updateTodos[todoIndex], text }

      return {
        ...state,
        todos: updateTodos,
      }
    },
  },
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
