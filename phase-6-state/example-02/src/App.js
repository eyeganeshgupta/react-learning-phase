import { Component } from "react";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  render() {
    return (
      <div>
        <ShoppingCart items={["Lenskart BLU Glasses", "Firefox Cycle"]} />
      </div>
    );
  }
}

export default App;
