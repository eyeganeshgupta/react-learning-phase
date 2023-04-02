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
}

export default Product;
