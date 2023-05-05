import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h3>Count is: {count}</h3>
      <button
        onClick={() => {
          setCount((previousCount) => previousCount + 1);
        }}
        style={{
          padding: "5px 14px",
          border: "none",
          outline: "none",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        Increment Count
      </button>
    </React.Fragment>
  );
}
