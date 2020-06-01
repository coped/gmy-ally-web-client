import React from "react";
import { Logo } from "components/common";

export default function Welcome() {
  return (
    <div>
      <div className="center-column"></div>
      <div className="container box">
        <div className="logo-welcome">
          <Logo />
        </div>
        <h1 className="has-text-centered is-size-1 title">
          Welcome to Gym Partner
        </h1>
      </div>
    </div>
  );
}
