import React from 'react'
import {MyAppContext} from "./App"
import {useContext} from "react"

function GrandChild() {
    const myFunc=useContext(MyAppContext)
    console.log(myFunc)
  return (
    <div style={{
        padding:"2rem",
        backgroundColor:"#40916c",
    }}>
        <h3>GrandChild</h3>
        <button onClick={myFunc}>Call my func</button>
    </div>
  )
}

export default GrandChild