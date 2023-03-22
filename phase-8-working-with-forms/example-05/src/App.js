import { Component } from "react";
import APP from "./AAP";
import BJP from "./BJP";
import Congress from "./Congress";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <APP />
        <BJP />
        <Congress />
      </div>
    );
  }
}

export default App;
