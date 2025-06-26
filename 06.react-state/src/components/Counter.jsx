import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    if(count<0){
        alert("Count cannot be negative, reverting to 0");
        setCount(0);
    }
    if(count>10){
        alert("Count cannot be greater than 10, reverting to 0");
        setCount(0);
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default Counter