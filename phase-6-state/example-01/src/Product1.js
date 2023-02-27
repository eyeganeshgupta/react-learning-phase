import { Component } from "react";

class Product1 extends Component {
  state = {
    productName: "Sonata Watch",
    price: 999,
  };

  render() {
    return (
      <div>
        <p>Product name: {this.state.productName}</p>
        <p>Price: {this.state.price}</p>
      </div>
    );
  }
}

export default Product1;
