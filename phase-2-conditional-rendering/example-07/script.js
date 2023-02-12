function generateRandomValue() {
  let numArr = [18, 1, 2];
  let index = parseInt(Math.random() * numArr.length);
  return numArr[index];
}

function Lottery() {
  let randomValue = generateRandomValue();
  let flag = false;
  if (randomValue === 18) {
    flag = true;
  }
  return (
    <section>
      <h3>You got {randomValue},</h3>
      <h1>
        {flag === false
          ? "Sorry! Better Luck Next Time!"
          : "Congratulations! You won lottery"}
      </h1>
      {flag === true && <img src="../../assets/you-won.gif" />}
    </section>
  );
}

ReactDOM.render(<Lottery />, document.querySelector("div"));
