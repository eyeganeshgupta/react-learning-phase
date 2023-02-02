function App() {
  let heading = React.createElement("h1", null, "Our Team");

  let unorderedList = React.createElement("ul", null, [
    React.createElement("li", null, "Thor"),
    React.createElement("li", null, "Thanos"),
    React.createElement("li", null, "Iron-Man"),
    React.createElement("li", null, "Spider-Man"),
    React.createElement("li", null, "Doctor Strange"),
  ]);

  let divContainer = React.createElement("div", null, [heading, unorderedList]);
  return divContainer;
}

let parentContainer = document.querySelector("div");
let element = React.createElement(App);
ReactDOM.render(element, parentContainer);
