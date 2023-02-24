class App extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Asus"
          rollNo={2020}
          subjects={["History", "Geography", "Civics"]}
          marks={[89, 83, 52]}
        />
      </div>
    );
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);

root.render(<App />);
