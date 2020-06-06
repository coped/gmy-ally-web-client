import React from "react";

export default function Notification(props) {
  const { classList = [], children, type, ...rest } = props;
  const classes = ["notification", "is-medium", `is-${type}`, ...classList];
  return (
    <div className={classes.join(" ")} {...rest}>
      {children}
    </div>
  );
}
