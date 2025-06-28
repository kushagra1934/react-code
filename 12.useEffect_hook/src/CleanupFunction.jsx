import React from "react";
import { useEffect, useState } from "react";

//1. cleanup function is a function that is called when the component is unmounted
//2. subsequent renders
//when there is some value inside dependency array
//when value changes
//1.component rerenders
//2.cleanup function is called
//3.useEffect is called again



function CleanupFunction() {
  console.log("component rendered");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    return function () {
      console.log("cleanup function");
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CleanupFunction;
