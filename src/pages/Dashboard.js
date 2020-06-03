import React from "react";
import { useAuth } from "context/auth";
import { Button } from "components/common";

export default function Dashboard() {
  const { setAuthToken, removeAuthToken } = useAuth();

  function logOut() {
    setAuthToken(null);
    removeAuthToken();
  }

  return (
    <div id="Dashboard">
      <p>This is the dashboard.</p>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
