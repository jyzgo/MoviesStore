import React, { Component } from "react";
import Products from "./../test/products";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <a href="/home">Home</a> <br />
        <a href="/products">Products</a> <br />
        <a href="/posts">Posts</a> <br />
        <a href="/admin">Admin</a> <br />
      </div>
    );
  }
}

export default NavBar;
