import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Uncontrolled from './components/Uncontrolled'
import Controlled from './components/Controlled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Uncontrolled Form</h1>
      <Uncontrolled></Uncontrolled>
      <h1>Controlled form</h1>
      <Controlled></Controlled>
    </>
  )
}

export default App
