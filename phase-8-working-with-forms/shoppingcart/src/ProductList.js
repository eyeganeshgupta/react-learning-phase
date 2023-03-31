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

  render() {
    let productList = this.state.itemsArr.map((value) => {
      return (
        <Product
          item={value}
          remove={this.deleteProduct}
          key={value.productName}
          tempo={this.instanceVar}
        />
      );
    });

    this.instanceVar = this.instanceVar * 2;

    return (
      <div className="ProductList">
        <h1>Your Shopping Cart</h1>

        <section>
          <table>
            <tbody>{productList}</tbody>
          </table>
        </section>

        <hr />

        <section>
          <h1>Add New Product</h1>
          <ProductForm add={this.addProduct} />
        </section>
      </div>
    );
  }
}
