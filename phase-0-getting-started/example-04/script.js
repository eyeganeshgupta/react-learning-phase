function MyComponent() {
  let paragraph = React.createElement(
    "p",
    null,
    "React is a component based library"
  );
  let div = React.createElement("div", null, ["What is React ?", paragraph]);
  return div;
}

let element = React.createElement(MyComponent);
let divContainer = document.querySelector("div");

ReactDOM.render(element, divContainer);
