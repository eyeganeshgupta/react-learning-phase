function generateRandomValue() {
  let numArr = [89, 83, 97, 17, 52, 6, 14, 11, 108, 2];
  let index = parseInt(Math.random() * numArr.length);
  return numArr[index];
}

function CheckEvenOdd() {
  let randomValue = generateRandomValue();
  let heading = <h3>Generated Number is {randomValue},</h3>;
  // let paragraph = <p>{randomValue % 2 === 0 ? "It is an Even." : ""}</p>;
  // {randomValue % 2 === 0 ? <p>It is an Even.</p> : <p></p>}
  let paragraph = randomValue % 2 === 0 && <p>It is an Even.</p>;
  return (
    <section>
      {heading}
      {paragraph}
    </section>
  );
}

ReactDOM.render(<CheckEvenOdd />, document.querySelector("div"));
