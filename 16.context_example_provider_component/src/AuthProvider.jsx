import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    username: "",
    email: "",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, useAuth };
