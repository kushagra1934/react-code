import React, { useRef } from "react";

//useRef hook
//example of useRef
// diff b/w useRef and useState
//handle form inputs using useRef

function ExampleUseRef() {
    console.log("Component Rendered")
    
  const username = useRef("Kushagra");
  //   console.log(username)
  const handleClick=()=>{
    username.current="Kushagra Singh"
  }
  return (
    <div>
      <h1>Hello {username.current}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default ExampleUseRef;
