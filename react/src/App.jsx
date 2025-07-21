import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // desestruturando o use state

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)

  }

  const decrementCount = () =>{
    setCount((prevState) => prevState - 1)
  }

  return (
    <>
      <p>{count}</p>

      <button onClick={incrementCount}>
        Clique aqui
      </button>

      <button onClick={decrementCount}>
        Decrement
      </button>
    </>
  )
}

export default App
