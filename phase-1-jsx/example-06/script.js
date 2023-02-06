function Clock() {
  let now = new Date();

  return (
    <div>
      <h1>India</h1>
      <p>Current Date And Time {now.toLocaleString()}.</p>
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<Clock />, document.querySelector("div"));
}, 1000);
