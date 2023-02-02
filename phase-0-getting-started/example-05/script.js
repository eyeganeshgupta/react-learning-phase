function MyComponent() {
  let heading = React.createElement("h3", null, [
    "React is ",
    React.createElement("span", null, "🧡"),
  ]);
  return heading;
}

let element = React.createElement(MyComponent);
let divContainer = document.querySelector("div");

ReactDOM.render(element, divContainer);
