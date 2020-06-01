import React from "react";

export default function Button({
  children,
  classList = [],
  loading,
  onClick = undefined,
}) {
  const classes = () => {
    const list = ["button", ...classList];
    return loading ? [...list, "is-loading"].join(" ") : list.join(" ");
  };
  return (
    <div className="field">
      <div className="control">
        <button className={classes()} onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  );
}
