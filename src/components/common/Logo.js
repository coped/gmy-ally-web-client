import React from "react";
import "./Logo.css";
import gymPartnerLogo from "assets/images/logo_transparent.png";

export default function Logo(props) {
  const isAnimated = props.isAnimated ? true : false;

  return (
    <img
      src={gymPartnerLogo}
      className={isAnimated ? "Logo-animated" : "Logo-unanimated"}
      alt="logo"
    />
  );
}
