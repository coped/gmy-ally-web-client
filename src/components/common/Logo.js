import React from "react";
import "assets/images/Logo.css";
import gymPartnerLogo from "assets/images/logo_transparent.png";

export default function Logo(props) {
  return (
    <img
      src={gymPartnerLogo}
      className={props.isAnimated ? "Logo-animated" : ""}
      alt="logo"
    />
  );
}
