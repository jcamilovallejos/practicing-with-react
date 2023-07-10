import { useState } from 'react'
import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'

const initialTodos = [  
  { id: 1, title: 'Complete online JavaScript course', completed: true },
  { id: 2, title: 'Jog around the park 3x', completed: false },
  { id: 3, title: '10 minutes meditation', completed: false },
  { id: 4, title: 'Read for 1 hour', completed: false },
  { id: 5, title: 'Pick up groceries', completed: false }
]

function App() {

  const [todos, setTodos] = useState(initialTodos)
  const [filteredTodos, setFilteredTodos] = useState([])

  const handleCreateTodo = (todo) => {
    setTodos([
        ...todos,{
          id: Date.now(),
          completed: false,
          title: todo.title
        }
    ])
  }

  const handleDeleteTodo = (id) => { 
    setTodos(todos.filter(todo => todo.id === id))
  }

  const handleUpdateTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed === false))
  }

  const handleFilterTodo = (status) => {
    if(status === 'All') {
      setFilteredTodos([])
    }else{
      setFilteredTodos(todos.filter(item => item.completed !== status))
    }
  }

  return (
    <div className="container bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain bg-gray-300 dark:bg-gray-900 
    min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">

      <Header />

      <main className='container mx-auto px-4 mt-4 rounded-md'>

          <TodoCreate handleCreateTodo={handleCreateTodo} />
          <TodoList todos={filteredTodos.length > 0 ? filteredTodos : todos} handleDelete={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />
          <TodoComputed todos={todos} handleClearCompleted={handleClearCompleted} />
          <TodoFilter handleFilterTodo={handleFilterTodo} />

      </main>

      <footer 
        className='text-center mt-8 dark:text-white'
      >
        Drag and drop
      </footer>

    </div>
  )
}

export default App
