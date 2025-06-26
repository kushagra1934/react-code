//state is a way to store data that can be changed
//useState is a hook that allows us to use state in our components
//useState is a function that returns an array with two elements
//the first element is the current state value
//the second element is a function that allows us to update the state
//we can use useState to store data that can be changed
//we can use useState to store data that can be changed

// import './App.css'
import { useState } from "react";

//In react we cannot use normal variables to store data that can be changed

//when state changes, the component re-renders

//useState(default value) ---> [statevalue, function to update state value]

function SimpleStateChange() {
  // const returnedValue = useState("Harshit");
  // const firstName = returnedValue[0];
  // const functionToUpdateFirstName = returnedValue[1];

  const [firstName, setFirstName] = useState("Harshit");

  function handleNameChange() {
    if (firstName === "Harshit") {
      setFirstName("Kushagra");
    } else {
      setFirstName("Harshit");
    }
  }

  return (
    <div>
      <h1>{firstName}</h1>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default SimpleStateChange;
