import React from "react";
import { Button } from "components/common";

export default function formButton({ children, ...rest }) {
  return (
    <div className="field">
      <div className="control">
        <Button {...rest}>{children}</Button>
      </div>
    </div>
  );
}
