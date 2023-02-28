import { Component } from "react";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      total: this.props.items.length,
    };
    setTimeout(this.updateCart, 5000);
  }

  updateCart = () => {
    let newItems = [...this.state.items, "Asus Laptop"];
    let newTotal = newItems.length;

    this.setState({ items: newItems, total: newTotal });
  };

  render() {
    return (
      <div>
        <h1>Cart Details</h1>
        <h3>Product Details: {this.state.items.join(", ")}</h3>
        <h3>Total no. of items: {this.state.total}</h3>
      </div>
    );
  }
}

export default ShoppingCart;
