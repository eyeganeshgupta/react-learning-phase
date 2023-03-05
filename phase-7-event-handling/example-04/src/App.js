import { Component } from "react";
import Student from "./Student";

class App extends Component {
  render() {
    return (
      <div>
        <Student name="Ritika" roll={49} />
        <Student name="Gunjan" roll={18} />
        <Student name="Kajal" roll={21} />
      </div>
    );
  }
}

export default App;
