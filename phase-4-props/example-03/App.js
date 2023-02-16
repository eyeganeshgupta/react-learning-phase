class App extends React.Component {
  render() {
    return (
      <Student
        name="Ganesh"
        age={21}
        subjects={["C", "C++", "Java", "Python"]}
        marks={[92, 75, 64, 89]}
        isPass={true}
        address={{
          street: "Santosh Bhuwan, Valai Pada Road",
          city: "Nallasopara",
        }}
      />
    );
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
