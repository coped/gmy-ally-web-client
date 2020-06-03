import React from "react";
import "assets/Welcome.scss";
import { Button } from "components/common";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div id="Welcome">
      <Link to="/signup">
        <Button classList={["is-primary"]}>Sign up</Button>
      </Link>
      <Link to="/login">
        <Button classList={["is-link"]}>Log in</Button>
      </Link>
    </div>
  );
}
