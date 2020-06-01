import React from "react";

export default function Button({classList = [], onClick, children}) {
  const classes = classList;
  classes.push("button");
  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
