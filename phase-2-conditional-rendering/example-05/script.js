function generateRandomValue() {
  let numArr = [89, 83, 97, 17, 52, 6, 14, 11, 108, 2];
  let index = parseInt(Math.random() * numArr.length);
  return numArr[index];
}

function CheckEvenOdd() {
  let randomValue = generateRandomValue();
  let message = null;
  switch (randomValue % 2) {
    case 0:
      message = <p>It is an Even number</p>;
      break;
    case 1:
      message = <p>It is an Odd number</p>;
      break;
  }
  return (
    <section>
      <h3>Generated Number is {randomValue},</h3>
      {message}
    </section>
  );
}

ReactDOM.render(<CheckEvenOdd />, document.querySelector("div"));
