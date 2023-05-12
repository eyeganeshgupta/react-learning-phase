import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);

  // If an empty array is passed as dependency then the side-effect runs once after the initial rendering.
  /*
  useEffect(() => {
    document.title = count;
  }, []);
  */

  // If state or props are passed as dependency then the side-effect runs only when any dependency value changes.
  useEffect(() => {
    document.title = count;
  }, [count]);

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
