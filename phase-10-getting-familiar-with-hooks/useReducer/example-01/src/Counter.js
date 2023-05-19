import React, { useReducer } from "react";

export default function Counter() {
  const [state, dispatch] = useReducer((state, value) => {
    switch (value) {
      case "increment":
        return state + 1;
      default:
        return state;
    }
  }, 0);

  return (
    <React.Fragment>
      <h3>Count: {state}</h3>
      <button
        style={{
          border: "none",
          borderRadius: "5px",
          padding: "5px 13px",
          backgroundColor: "black",
          color: "whitesmoke",
          fontSize: "105%",
        }}
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
    </React.Fragment>
  );
}
