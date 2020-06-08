import React from "react";

export default function Notification(props) {
  const { classList = [], children, ...rest } = props;
  const classes = ["notification", "is-medium", ...classList];
  return (
    <div className={classes.join(" ")} {...rest}>
      {children}
    </div>
  );
}
