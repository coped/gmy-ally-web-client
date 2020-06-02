import React from "react";
import "assets/Welcome.scss";
import { Button } from "components/common";

export default function Welcome() {
  return (
    <div id="Welcome">
      <a href="/signup">
        <Button classList={["is-primary"]}>Sign up</Button>
      </a>
      <a href="/login">
        <Button classList={["is-link"]}>Log in</Button>
      </a>
    </div>
  );
}
