//useEffect is a hook that is used to perform side effects in a functional component
//for example: fetching data from api, subscribing to events, updating the document title, etc.

//class based componentts have life cycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount
//useEffect is used now
//it takes callback function as input and second argument is an array of dependencies

//the function is called everytime the component is rendered


//dependency array
//[]-->useEffect is called only once when the component is mounted
//[counter]-->useEffect is called everytime the counter is updated
import { useEffect, useState } from "react";
function ExampleUseEffect() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  console.log("component rendered");
  useEffect(() => {
    console.log("Inside use effect");
  },[counter1]);
  return (
    <div>
      <h1>counter1: {counter1}</h1>
      <button onClick={() => setCounter1((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <h1>counter2: {counter2}</h1>
      <button onClick={() => setCounter2((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default ExampleUseEffect;
