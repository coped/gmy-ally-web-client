import React from "react";
import "assets/Logo.scss";
import gymPartnerLogo from "images/logo_transparent.png";

export default function Logo({ classList = [], animated }) {
  let classes = classList;
  if (animated) classes.push("Logo-animated");
  return (
    <img src={gymPartnerLogo} className={classes.join(" ")} alt="logo" />
  );
}
