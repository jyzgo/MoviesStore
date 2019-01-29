import React, { Component } from "react";
import { Route } from "react-router-dom";

class ProductDetails extends Component {
  handleSave = () => {
    this.props.history.push("/products");
  };
  state = {};
  render() {
    return (
      <div>
        <h3> Product Detail is id {this.props.match.params.id} </h3>;
        <button onClick={this.handleSave}>Save </button>
      </div>
    );
  }
}

export default ProductDetails;
