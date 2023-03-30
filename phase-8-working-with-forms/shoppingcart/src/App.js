import { Component } from "react";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ProductList
          itemsArr={[
            { productName: "Shirt", quantity: 2 },
            { productName: "TeaBox", quantity: 8 },
            { productName: "Earphone", quantity: 3 },
            { productName: "Smart Phone", quantity: 3 },
            { productName: "Mivi Speaker", quantity: 1 },
          ]}
        />
      </div>
    );
  }
}

export default App;
