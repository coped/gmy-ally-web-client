import React from "react";

export default function Button(props) {
  const { children, isLoading, classModifiers } = props;
  return (
    <div className="field">
      <div className="control">
        <button className={`button ${classModifiers} ${isLoading}`}>
          {children}
        </button>
      </div>
    </div>
  );
}
