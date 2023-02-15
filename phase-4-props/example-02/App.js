class App extends React.Component {
  render() {
    return <Wish name="Ritika" from="Gunjan" />;
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
