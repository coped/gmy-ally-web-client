import React from "react";
import "./Logo.css";
import gymPartnerLogo from "images/logo_transparent.png";

export default function Logo(props) {
  return (
    <img
      src={gymPartnerLogo}
      className={props.isAnimated ? "Logo-animated" : ""}
      alt="logo"
    />
  );
}
