import React from "react";

export default function Button(props) {
  const classModifiers = props.classModifiers ? props.classModifiers : "";
  return (
    <button className={"button " + classModifiers} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
