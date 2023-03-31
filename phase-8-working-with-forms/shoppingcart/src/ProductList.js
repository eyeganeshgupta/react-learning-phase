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
}
