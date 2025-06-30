import React from "react";
import { useAuth } from "./AuthProvider";
function BasicDetail() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({ username: "", email: "" });
  };
  return (
    <div>
      <h2>name:{auth.username}</h2>
      <h2>email:{auth.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default BasicDetail;
