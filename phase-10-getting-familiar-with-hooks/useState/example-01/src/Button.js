import React, { useState } from "react";
import "./Button.css";

export default function Button() {
  const [text, setText] = useState("Click me");
  return (
    <section>
      <button
        onClick={() => {
          setText(new Date().toLocaleString());
        }}
      >
        {text}
      </button>
    </section>
  );
}
