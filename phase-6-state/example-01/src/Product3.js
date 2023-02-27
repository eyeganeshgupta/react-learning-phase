import { Component } from "react";

class Product3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.productName,
      price: this.props.price,
    };
  }

  render() {
    return (
      <div>
        <p>Product name: {this.props.productName}</p>
        <p>Price: {this.props.price}</p>
      </div>
    );
  }
}

export default Product3;
