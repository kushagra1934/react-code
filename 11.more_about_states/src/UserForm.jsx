import React, { useState } from "react";
import FullName from "./FullName";

//children of a compoenent are rerendered when the parent is rerendered whereas the vice versa is not true

function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [fullName, setFullName] = useState("");
    const fullName = firstName + " " + lastName;
  return (
    <form>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstname">firstname </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            // setFullName(e.target.value + " " + lastName);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">lastname </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            // setFullName(firstName + " " + e.target.value);
          }}
        />
      </div>
      <h2>user detail</h2>
      <div>
        <p>firstname: {firstName}</p>
        <p>lastname: {lastName}</p>
        <p>fullname: {fullName}<FullName fullName={fullName} /></p>
      </div>
    </form>
  );
}

export default UserForm;
