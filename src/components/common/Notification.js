import React from "react";

export default function Notification(props) {
  return (
    <div className={`notification is-${props.type} is-medium`}>
      {props.children}
    </div>
  );
}
