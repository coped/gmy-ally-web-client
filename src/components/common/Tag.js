import React from "react";

export default function Tag(props) {
  return (
    <div>
      <span className={`tag is-${props.type} is-medium`}>
        {props.message}
      </span>
    </div>
  );
}
