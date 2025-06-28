import React, { useState,useEffect } from 'react'

function MouseMoveEvent() {
    const [position,setPosition]=useState({x:0,y:0})
    const handleMouseMove=(e)=>{
        console.log({ x: e.clientX, y: e.clientY });
        setPosition({ x: e.clientX, y: e.clientY });
    }
    useEffect(()=>{
        document.addEventListener("mousemove",handleMouseMove)
        return ()=>{
            document.removeEventListener("mousemove",handleMouseMove)
        }

        //whenever addind event listener, we need to remove it using cleanup function
    },[])
  return (
    <div>
        <p>X: {position.x}</p>
        <p>Y: {position.y}</p>
    </div>
    
  )
}

export default MouseMoveEvent