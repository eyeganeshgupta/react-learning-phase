class App extends React.Component {
  render() {
    return (
      <div>
        <Asus />
      </div>
    );
  }
}

/*
  let divContainer = document.querySelector("div");
  ReactDOM.render(<App />, divContainer);
*/

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);

/*
  console.log(root);
  console.log(typeof root);
*/
