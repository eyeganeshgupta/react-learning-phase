import { Component } from "react";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";

class App extends Component {
  render() {
    return (
      <div>
        <Product1 />
        <Product2 />
        <Product3 productName="Rolex" price={96321} />
      </div>
    );
  }
}

export default App;
