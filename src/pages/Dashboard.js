import React, { useEffect, useState } from "react";
import { Button } from "components/common";
import { useAuth } from "context/auth";
import { useUser } from "context/user";
import { PageLoader } from "components/common";
import Api from "lib/api";

export default function Dashboard() {
  const { auth } = useAuth();
  const { user, setUserContext } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await Api.showUser({
        id: auth.userId,
        authorization: auth.token,
      });
      setUserContext(data.payload.user);
      setLoading(false);
    }
    fetchData();
  }, []);

  function showUserData() {
    console.log(user);
  }

  return (
    <div id="Dashboard">
      <PageLoader loading={loading} />
      <p>This is the dashboard.</p>
      <Button onClick={showUserData}>Show data</Button>
    </div>
  );
}
