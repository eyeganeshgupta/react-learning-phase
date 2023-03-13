import { Component } from "react";
import Product from "./Product";
import "./ProductList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArr: this.props.itemsArr,
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(item) {
    /*
    let idx = this.state.itemsArr.indexOf(item);
    let leftArr = this.state.itemsArr.slice(0, idx);
    let rightArr = this.state.itemsArr.slice(idx + 1);
    let updatedItems = [...leftArr, ...rightArr];
    this.setState({itemsArr: updatedItems});
    */

    /*
    let updatedItems = [];

    for (let value of this.state.itemsArr) {
      if (value !== item) {
        updatedItems.push(value);
      }
    }
    */

    let updatedItems = this.state.itemsArr.filter((saaman) => saaman !== item);
    this.setState({ itemsArr: updatedItems });
  }

  render() {
    let items = this.state.itemsArr.map((value) => {
      return <Product item={value} remove={this.deleteItem} key={value} />;
    });

    return (
      <div className="ProductList">
        <h1>Products in Cart</h1>
        <hr />
        <ul>{items}</ul>
      </div>
    );
  }
}

export default ProductList;
