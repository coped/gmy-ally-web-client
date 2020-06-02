import React from "react";

export default function Input(props) {
  const { label, ...rest } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" {...rest} />
      </div>
    </div>
  );
}
