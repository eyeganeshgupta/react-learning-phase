class App extends React.Component {
  render() {
    return (
      <div>
        <Course
          name="Basic Java Developer"
          titles={[
            "Java SE",
            "HTML",
            "CSS",
            "JavaScript",
            "Oracle",
            "Jakarta EE",
          ]}
        />
      </div>
    );
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
