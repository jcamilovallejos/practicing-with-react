import Form from './components/Form'
import Todos from './components/Todos'
import { useState, useEffect } from 'react'

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

function App() {

  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  const updateTodo = id => {
    const newArray = todos.map(todo => todo.id === id ? {...todo, status: !todo.status} : todo)
    setTodos(newArray)
  }

  const orderTodo = arrayTodo => {

    return todos.sort((a, b) => {
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })

  }

  return (
    <>
      <h1 className='container'>Todo</h1>
      <Form   
        addTodo={addTodo}
      >
      </Form>
      <Todos 
        todos={orderTodo(todos)} 
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      >
      </Todos>
    </>
  )
}

export default App

