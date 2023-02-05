function Clock() {
  let now = new Date();

  let heading = <h1>India</h1>;
  let paragraph = (
    <p className="date">Current Date And Time {now.toLocaleString()}.</p>
  );

  return (
    <div>
      {heading}
      {paragraph}
    </div>
  );
}

ReactDOM.render(<Clock />, document.querySelector("div"));
