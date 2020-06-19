import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const existingAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(existingAuth);

  function setAuthContext(data) {
    setAuth(data);
    if (data === null) {
      localStorage.clear("auth");
    } else {
      localStorage.setItem("auth", JSON.stringify(data));
    }
  }
  return <AuthContext.Provider value={{ auth, setAuthContext }} {...props} />;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
