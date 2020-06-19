import React, { useEffect, useState } from "react";
import { Button } from "components/common";
import { useAuth } from "context/auth";
import { useUser } from "context/user";
import Api from "lib/api";
import { Redirect } from "react-router-dom";

export default function Dashboard() {
  const { auth, setAuthContext } = useAuth();
  const { user, setUserContext } = useUser();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await Api.showUser({
        id: auth.userId,
        authorization: auth.token,
      });
      setUserContext(data.payload.user);
    }
    fetchData();
  }, []);

  function showUserData() {
    console.log(user);
  }

  function logOut() {
    setAuthContext(null);
    setUserContext(null);
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div id="Dashboard">
      <p>This is the dashboard.</p>
      <Button onClick={showUserData}>Show data</Button>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
