import {useState} from 'react'

//setState is async --> v important
//pass to variable and then use it
//example: const [count, setCount] = useState(0);
//setCount(count+1) --> this is not the correct way to update the state
//correct way: setCount((prevCount)=>prevCount+1)
//this is because setState is async and the count is not updated immediately
//so we need to pass a function to setState
//this function will be called with the previous state value
//this is called functional update



//props are immutable
//never change props 


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