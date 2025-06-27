
import './App.css'
import { useState } from 'react'


function App() {
  const [username,setUsername]=useState("")
  function handleUsernameChange(event){
    setUsername(event.target.value)
  }

  return (
    <div>
      <h1>Form Tutorial</h1>
      <form>
        <label htmlFor="username">Username </label>
        <input type="text" id="username" value={username}  
        onChange={handleUsernameChange}/>
      </form>
    </div>
  )
}

export default App
