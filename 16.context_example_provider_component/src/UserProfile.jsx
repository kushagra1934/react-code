import React from "react";
import BasicDetail from "./BasicDetail";
import { useAuth } from "./AuthProvider";
function UserProfile() {
    const {auth, setAuth}=useAuth()
    const handleLogin=()=>{
        setAuth({username:"kushagra",email:"kushagra@gmail.com"})
    }
  return (
    <>
      <h1>User profile</h1>
      {auth.username ? (<BasicDetail />): (<button onClick={handleLogin}>Login</button>)}
    </>
  );
}

export default UserProfile;
