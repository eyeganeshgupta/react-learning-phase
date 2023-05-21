import React, { useReducer } from "react";
import "./Counter.css";

export default function Counter() {
  const [state, dispatch] = useReducer((state, value) => {
    switch (value) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }, 0);

  return (
    <React.Fragment>
      <h3>Count: {state}</h3>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </React.Fragment>
  );
}
