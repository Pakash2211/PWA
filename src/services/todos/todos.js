// Add a new todo
async function addTodo (todo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
  
    if (!response.ok) {
      throw new Error('Error adding todo')
    }
  
    return response.json()
  }
  
  // Fetch all todos
  async function fetchTodos () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  
    if (!response.ok) {
      throw new Error('Error fetching todos')
    }
  
    return response.json()
  }
  
  export { addTodo, fetchTodos }
  