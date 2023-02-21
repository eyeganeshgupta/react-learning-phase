function App() {
  return (
    <div>
      <Wish name="Gunjan" from="Ganesh" />
      <Wish from="Ganesh" />
      <Wish name="Gunjan" />
      <Wish />
    </div>
  );
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
