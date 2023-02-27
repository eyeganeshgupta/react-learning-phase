import { Component } from "react";

class Product2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "Rado Watch",
      price: 1499,
    };
  }

  render() {
    return (
      <div>
        <p>Product name: {this.state.productName}</p>
        <p>Price: {this.state.price}</p>
      </div>
    );
  }
}

export default Product2;
