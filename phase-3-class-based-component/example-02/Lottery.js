function generateRandomValue() {
  let numArr = [89, 83, 97, 17, 52, 18];
  let index = parseInt(Math.random() * numArr.length);
  return numArr[index];
}

class Lottery extends React.Component {
  render() {
    let lotteryNumber = generateRandomValue();
    let result = null;

    if (lotteryNumber === 18) {
      result = (
        <div>
          <h3>Congratulations!!! You won</h3>
          <img src="../../assets/you-won.gif" />
        </div>
      );
    } else {
      result = <h3>Sorry!! Better Luck Next Time</h3>;
    }

    return (
      <div>
        <h1>You got {lotteryNumber}</h1>
        {result}
      </div>
    );
  }
}
