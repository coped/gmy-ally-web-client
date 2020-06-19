import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider(props) {
  const existingUser = localStorage.getItem("user");
  const [user, setUser] = useState(existingUser);

  function setUserContext(data) {
    if (data === null) {
      localStorage.clear("user");
    } else {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    }
  }

  return <UserContext.Provider value={{ user, setUserContext }} {...props} />;
}

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
