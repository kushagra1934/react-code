import React from "react";
import { useState } from "react";
import {v4 as uuid} from 'uuid'
function StateExampleArray() {
    const[fruits,setFruits]=useState(["apple","banana","cherry"])

    const addFruit=()=>{
        // setFruits([...fruits,"mango"])
        setFruits(prevFruits=>[...prevFruits,"mango"])
    }
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={uuid()}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>
        Add Fruit
      </button>
    </>
  );
}

export default StateExampleArray;
