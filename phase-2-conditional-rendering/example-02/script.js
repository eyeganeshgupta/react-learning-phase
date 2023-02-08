function generateRandomValue() {
  let numArr = [89, 83, 97, 17, 52, 6, 14, 11, 108, 2];
  let index = parseInt(Math.random() * numArr.length);
  return numArr[index];
}

function CheckEvenOdd() {
  let randomValue = generateRandomValue();
  return (
    <section>
      <h3>Generated Number is {randomValue},</h3>
      <p>{randomValue % 2 === 0 ? "It is an Even." : ""}</p>
    </section>
  );
}

ReactDOM.render(<CheckEvenOdd />, document.querySelector("div"));
