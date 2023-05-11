import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    document.title = count;
  });

  return (
    <div>
      <h3>
        Counter <span style={{ color: "darkred" }}>{count}</span>
      </h3>
      <button
        onClick={() => {
          setCounter((previousCount) => previousCount + 1);
        }}
      >
        Increment Counter
      </button>
    </div>
  );
}
