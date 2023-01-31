function MyComponent() {
  let heading = React.createElement("h1", null, "What is React ?");
  let paragraph = React.createElement(
    "p",
    null,
    "React is component based library"
  );
  let div = React.createElement("div", null, [heading, paragraph]);
  return div;
}

let element = React.createElement(MyComponent);
let divContainer = document.querySelector("div");

ReactDOM.render(element, divContainer);
