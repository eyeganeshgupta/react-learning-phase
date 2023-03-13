import { Component } from "react";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          itemsArr={[
            "Idli",
            "Mask",
            "Holi Color",
            "Nokia 3310",
            "Banana Chips",
            "Wireless Radio",
          ]}
        />
      </div>
    );
  }
}

export default App;
