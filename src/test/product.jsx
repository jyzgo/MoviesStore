import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Product {this.props.id} </h3>
        <Link to={`/products/${this.props.id}`}> {this.props.name}</Link>
      </div>
    );
  }
}

export default Product;
