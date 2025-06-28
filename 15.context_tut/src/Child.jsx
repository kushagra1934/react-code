import React from 'react'
import GrandChild from './GrandChild'
function Child() {
  return (
    <div style={{
        padding:"2rem",
        backgroundColor:"#73b198",
    }}>
        <h2>Child</h2>
        <GrandChild/>
    </div>
  )
}

export default Child