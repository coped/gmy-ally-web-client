import React from "react";

export default function TextInputField(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input 
          className="input"
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};
