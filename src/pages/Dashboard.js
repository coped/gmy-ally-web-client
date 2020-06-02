import React from "react";
import { useAuth } from "context/auth";
import { Button } from "components/common";

export default function Dashboard() {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens("");
  }
  return (
    <div id="Dashboard">
      <p>This is the dashboard.</p>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
