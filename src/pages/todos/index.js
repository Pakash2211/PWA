import React from 'react'
import { useQuery } from 'react-query'

import { fetchTodos } from '../../services/todos/todos'

export default function TodoList () {
  const { isLoading, error, data } = useQuery('todos', fetchTodos,{
    staleTime: 10000, // cache for 30 seconds
    cacheTime: 20000,
  })

  if (isLoading) {
    return <div>Loading todos...</div>
  }

  if (error) {
    return <div>Error fetching todos</div>
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
