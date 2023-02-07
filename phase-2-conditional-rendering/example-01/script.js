function generateRandomNumber() {
  let numArr = [89, 83, 96, 17, 52, 11, 47, 51, 30, 2];
  let index = Math.floor(Math.random() * numArr.length);
  let randomNumber = numArr[index];
  return randomNumber;
}

function GenerateEventOdd() {
  let randomNum = generateRandomNumber();
  return (
    <div>
      <h3>Generated Number is {randomNum},</h3>
      <p>It is an {randomNum % 2 === 0 ? "Even" : "Odd"}.</p>
    </div>
  );
}

ReactDOM.render(<GenerateEventOdd />, document.querySelector("div"));
