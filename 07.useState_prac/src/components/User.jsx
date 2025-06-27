import React from "react";

function User({ firstName, lastName, age, id,increaseAge,deleteUser }) {
  // const [userAge,setUserAge]=useState(age)

  return (
    <div>
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>age: {age}</p>
      <p>id: {id}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button onClick={()=>{
        deleteUser(id)
      }}>Delete User</button>
    </div>
  );
}

export default User;
