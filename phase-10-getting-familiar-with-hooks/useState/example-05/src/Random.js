import { useState } from "react";

export default function Random() {
  const [randomArr, setRandomArr] = useState([]);

  return (
    <section>
      <button
        onClick={() => {
          setRandomArr([...randomArr, generateRandomNumber()]);
        }}
      >
        Generate Random Number
      </button>
      {randomArr.map((element) => {
        return <p>{element}</p>;
      })}
    </section>
  );
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
