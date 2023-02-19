class App extends React.Component {
  render() {
    return (
      <div>
        <Wish name="Captain America" from="Hulk" />
        <Wish from="Hulk" />
        <Wish name="Captain America" />
        <Wish />
      </div>
    );
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
