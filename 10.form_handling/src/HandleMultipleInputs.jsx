import React, { useState } from "react";

function HandleMultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    setFormData(prevState=>{
        return {...prevState,[e.target.id]:e.target.value}
    })
  };
  return (
    <form style={{ padding: "1rem" }}>
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label> <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label> <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="username">Username</label> <br />
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label> <br />
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password</label> <br />
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="confirmPassword">Confirm Password</label> <br />
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="phoneNumber">Phone Number</label> <br />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="address">address</label> <br />
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value="Signup"
        style={{ marginTop: "1rem" }}
        onChange={handleSubmit}
      />
    </form>
  );
}

export default HandleMultipleInputs;
