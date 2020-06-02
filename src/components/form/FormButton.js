import React from "react";
import { Button } from "components/common";

export default function formButton(props) {
  const { children, ...rest } = props;
  return (
    <div className="field">
      <div className="control">
        <Button {...rest}>{children}</Button>
      </div>
    </div>
  );
}
