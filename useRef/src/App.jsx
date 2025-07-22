import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect,useState, useRef } from 'react'

function App() {
  const [name, setName] = useState("")
  const inputRef = useRef()


  return (
    <>
    <div>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello!! my name is {name}</p>
    </div>
    
    </>
  )
}

export default App
