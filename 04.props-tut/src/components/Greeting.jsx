import React from "react";
// import ShowFullName from "./ShowFullName";
function Greeting(props) {
  //const firstName = props.firstName;
  //const lastName = props.lastName;
  // const {firstName,lastName} = props;

  //cannot change the value of props
  //firstName = "Jane"; cant do this

  return <>{props.children}</>;
}

export default Greeting;
