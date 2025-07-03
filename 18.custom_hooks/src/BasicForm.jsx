// import React, { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function BasicForm() {
  const [firstname, setFirstName] = useLocalStorage("firstname", "");
  const [lastname, setLastName] = useLocalStorage("lastname", "");
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <h1>First Name: {firstname}</h1>
      <h1>Last Name: {lastname}</h1>
    </form>
  );
}

export default BasicForm;
