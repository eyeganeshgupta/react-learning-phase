class App extends React.Component {
  render() {
    return (
      <div>
        <Emoji e1="💍" e2="🎃" e3="💎" />
        <Emoji e1="💍" e2="💍" e3="💍" />
        <Emoji e1="🎁" e2="👗" e3="💄" />
      </div>
    );
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
