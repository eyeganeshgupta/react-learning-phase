function App() {
  let element = <h1>Happy New Year</h1>;
  return element;
}

let element = React.createElement(App);
ReactDOM.render(element, document.querySelector("div"));
