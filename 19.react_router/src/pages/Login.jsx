import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.previousPath || "/";
  console.log("logiin page", location);
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
          navigate(previousPath, { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
