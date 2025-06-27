import React from "react";
import { useState } from "react";

function StateExampleObject() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Kushagra",
    lastName: "Saxena",
    email: "kushagra@gmail.com",
    phone: "9876543210",
    age: 24,
  });

  const increaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };
  return (
    <div>
      <p>firstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>
      <p>email: {person.email}</p>
      <p>phone: {person.phone}</p>
      <p>age: {person.age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default StateExampleObject;
