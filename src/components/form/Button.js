import React from "react";

export default function Button(props) {
  const { children, classModifiers } = props;
  const isLoading = props.isLoading ? "is-loading" : "";
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
