import React, { Component } from "react";
import { Route } from "react-router-dom";

class ProductDetails extends Component {
  state = {};
  render() {
    return <h3> Product Detail is id {this.props.match.params.id} </h3>;
  }
}

export default ProductDetails;
