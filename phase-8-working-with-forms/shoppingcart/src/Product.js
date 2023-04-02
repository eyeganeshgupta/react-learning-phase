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

  render() {
    console.log(this.state.temp);
    console.log("In Product Render Method");
    return (
      <tr className="Product">
        <td className="productNameBox">{this.props.item.productName}</td>
        <td className="quantityBox">{this.props.item.quantity}</td>
        <td className="deleteSymbol">
          <i
            className="far fa-trash-alt delete"
            onClick={this.handleClick.bind(this)}
          ></i>
        </td>
      </tr>
    );
  }
}

export default Product;
