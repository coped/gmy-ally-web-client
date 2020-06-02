import React from "react";

export default function Button(props) {
  const { classList = [], loading = false, children, ...rest } = props;
  const classes = loading
    ? ["button", "is-loading", ...classList]
    : ["button", ...classList];
  return (
    <button className={classes.join(" ")} {...rest}>
      {children}
    </button>
  );
}
