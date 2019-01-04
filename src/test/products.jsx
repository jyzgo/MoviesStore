import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  state = {};
  list = [
    { id: 1, name: "Pp1" },
    { id: 2, name: "Pp2" },
    { id: 3, name: "Pp3" }
  ];
  render() {
    return (
      <div>
        <h1> Product List </h1>
        {this.list.map(p => (
          <Product key={p.id} id={p.id} name={p.name} />
        ))}
      </div>
    );
  }
}

export default Products;
