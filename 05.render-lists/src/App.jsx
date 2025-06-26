import { useState } from "react";
import User from "./components/User";
const users = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20 },
  { id: 2, firstName: "Jane", lastName: "Doe", age: 21 },
  { id: 3, firstName: "Jim", lastName: "Doe", age: 22 },
];

const handleClick = () => {
  alert("clicked");
};

function App() {
  return <div>
    {/* {
      users.map((user)=>{
        return <User firstName={user.firstName} lastName={user.lastName} age={user.age}/>
      })
    } */}

    <h1>App</h1>
    <button onClick={handleClick}>Click Me</button>
  </div>;
}

export default App;
