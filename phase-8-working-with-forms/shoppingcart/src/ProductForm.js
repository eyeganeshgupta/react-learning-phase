import { Component } from "react";
import "./ProductForm.css";

export default class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName: "",
            quantity: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(syntheticObj) {
        this.setState({ [syntheticObj.target.name]: syntheticObj.target.value });
    }

    handleSubmit(syntheticObj) {
        syntheticObj.preventDefault();

        if (this.state.productName !== "" && this.state.quantity !== "") {
            this.props.add(this.state);
        }

        this.setState({ productName: "", quantity: "" });
    }

    render() {
        return (
            <div className="ProductForm">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="productName">Product Name: </label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <div>
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <button>Add to Cart</button>
                </form>
            </div>
        );
    }
}
