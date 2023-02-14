function App() {
  return <Wish name="Gunjan" from="Ganesh" />;
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
