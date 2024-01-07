import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Reducers/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div className="max-w-sm mx-auto mt-8">
      <form className="flex items-center">
        <input
          type="text"
          id="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Task"
          required
        />
        <button
          type="submit"
          onClick={addTodoHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddTodo
