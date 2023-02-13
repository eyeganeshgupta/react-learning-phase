class App extends React.Component {
  render() {
    return <Lottery />;
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
