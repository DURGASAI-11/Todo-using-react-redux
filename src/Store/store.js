import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Reducers/todo/todoSlice'

export const store = configureStore({
  reducer: todoReducer,
})
