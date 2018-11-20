import React from "react";

// This Row component lets us use a materialize row without having to think about class names
export const Row = ({children}) => (
  <div className={`row`}>
    {children}
  </div>
);