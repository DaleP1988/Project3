import React from "react";

// This Col component lets us size materialize columns with less syntax
// e.g. <Col size="s12"> instead of <div className="col s12">
export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col s" + size).join(" ")}>
    {children}
  </div>
);