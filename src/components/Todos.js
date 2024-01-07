import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../Reducers/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [editingTodo, setEditingTodo] = useState(null)
  const [editedText, setEditedText] = useState('')

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const handleEdit = (todo) => {
    setEditingTodo(todo.id)
    setEditedText(todo.text)
  }

  const saveEdit = (id) => {
    dispatch(editTodo({ id, text: editedText }))
    setEditingTodo(null)
  }

  const cancelEdit = () => {
    setEditingTodo(null)
    setEditedText('')
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">TODO List</h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-gray-800 text-white p-4 mb-4 flex justify-between items-center rounded-md"
        >
          {editingTodo === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Edit task"
              />
              <button
                onClick={() => saveEdit(todo.id)}
                className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-r-none text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <div className="flex">
                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Todos
