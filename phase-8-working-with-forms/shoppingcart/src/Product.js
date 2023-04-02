import { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    console.log("In Product Constructor");
    this.state = {
      temp: this.props.tempo,
    };
  }

  handleClick() {
    this.props.remove(this.props.item.productName);
  }
}

export default Product;
