import React from "react";

export default function PageLoader({
  message = "Loading . . .",
  loading = false,
}) {
  const baseClasses = ["pageloader", "is-info"];
  const classes = loading ? [...baseClasses, "is-active"] : [...baseClasses];
  return (
    <div className={classes.join(" ")}>
      <span className="title">{message}</span>
    </div>
  );
}
