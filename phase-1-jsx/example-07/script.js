function Clock() {
  let now = new Date();
  let heading = <h1>India</h1>;
  // let paragraph = <p>Current Date And Time {now.toLocaleString()}</p>;
  // 23/01/2023, 16:26:51.
  // let paragraph = <p>Current Date And Time {now.toLocaleDateString()}, {now.toLocaleTimeString()}</p>;
  let paragraph = (
    <p>
      Current Date And Time {now.toLocaleDateString()}, {now.getHours()}:
      {now.getMinutes()}:{now.getSeconds()}
    </p>
  );

  return (
    <div>
      {heading}
      {paragraph}
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<Clock />, document.querySelector("div"));
}, 1000);
