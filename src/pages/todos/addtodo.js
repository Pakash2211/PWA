import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { addTodo } from '../../services/todos/todos'

export default function AddTodo () {
  const [todo, setTodo] = useState('')
  const queryClient = useQueryClient()
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      alert('Todo added successfully')
    }
  })

  function handleSubmit (e) {
    e.preventDefault()
    mutation.mutate({ todo })
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
