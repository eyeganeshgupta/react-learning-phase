import React from "react";
import SubChild from "./SubChild";

export default function Child() {
  return (
    <React.Fragment>
      <h2>This is Child Component</h2>
      <hr />
      <SubChild />
    </React.Fragment>
  );
}
