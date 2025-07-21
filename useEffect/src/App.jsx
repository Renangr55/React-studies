import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const responseJson = await response.json() 
    
      console.log(responseJson)

      setItems(responseJson)
    };

    fetchResourceType()
    
  },[resourceType])


  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  useEffect(() =>{
    console.log("teste")
    return () => {
      console.log("aa")
    }
  }, [])

  return (
    <>
    <div>
      <h1>{resourceType}</h1>
      <div style={{display: "flex", alignItems: "center"}}>

        <button onClick={() => changeResourceType("posts")}>post</button>
        <button onClick={() => changeResourceType("comments")}>comment</button>
        <button onClick={() => changeResourceType("todos")}>todos</button>



      </div>

      {items.map((item) => 
        <p>{item.title}</p>
      
        
        )}
    </div>
      
    </>
  )
}

export default App
