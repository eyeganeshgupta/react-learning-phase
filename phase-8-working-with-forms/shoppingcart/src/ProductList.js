import { Component } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import "./ProductList.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsArr: this.props.itemsArr,
    };

    this.instanceVar = 10;

    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  addProduct(newProductObj) {
    let allProductsArr = this.state.itemsArr;
    let isAvailable = false;
    for (let productObj of allProductsArr) {
      if (
        productObj.productName.trim().toLowerCase() ===
        newProductObj.productName.trim().toLowerCase()
      ) {
        productObj.quantity =
          productObj.quantity + Number(newProductObj.quantity);
        isAvailable = true;
        break;
      }
    }

    if (isAvailable) {
      this.setState({ itemsArr: allProductsArr });
    } else {
      newProductObj.quantity = Number(newProductObj.quantity);
      this.setState((currentState) => ({
        itemsArr: [...currentState.itemsArr, newProductObj],
      }));
    }
  }

  deleteProduct(productName) {
    console.log("Deleted Button Clicked");
    let updatedProductsArr = this.state.itemsArr.filter((productObj) => {
      if (productObj.productName !== productName) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ itemsArr: updatedProductsArr });
  }
}
