import React from "react";

export default function Button({ children, classModifiers, loading }) {
  let classes = `button ${classModifiers}`;
  if (loading) classes += " is-loading";
  return (
    <div className="field">
      <div className="control">
        <button
          className={classes}
        >
          {children}
        </button>
      </div>
    </div>
  );
}
