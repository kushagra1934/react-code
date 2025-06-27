import "./App.css";
import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Kushagra", lastName: "Saxena", age: 24 },
    { id: 2, firstName: "John", lastName: "Doe", age: 30 },
    { id: 3, firstName: "Jane", lastName: "Smith", age: 28 },
    { id: 4, firstName: "Jim", lastName: "Beam", age: 50 },
  ]);
  const increaseAge = (id) => {
    setUsers(prevState=>prevState.map(user=>{
      if(user.id===id){
        return {...user,age:user.age+1}
      }
      return user
    }))
  };
  const deleteUser = (id) => {
    // const newState=[]
    // for(let user of users){
    //   if(user.id!==id){
    //     newState.push(user)
    //   }
    // }
    // setUsers(newState);

    // setUsers((prevState)=>{
    //   return prevState.filter((user)=>{
    //     return user.id!==id
    //   })
    // })


    setUsers(prevState=>{
      return prevState.filter(user=>user.id!==id)
    })

  }
  return (
    <div className="App">
      <h1>State Example</h1>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
