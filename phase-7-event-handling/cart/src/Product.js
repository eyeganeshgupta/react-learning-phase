import { Component } from "react";
import "./Product.css";

class Product extends Component {
  handleClick(synObj) {
    console.log(this.props.key);
    this.props.remove(this.props.item);
  }

  render() {
    return (
      <li className="Product">
        <span>{this.props.item}</span>
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </li>
    );
  }
}

export default Product;
