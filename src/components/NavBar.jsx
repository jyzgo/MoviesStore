import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/home">Home</Link> <br />
        <Link to="/products">Products</Link> <br />
        <Link to="/posts">Posts</Link> <br />
        <Link to="/admin">Admin</Link> <br />
      </div>
    );
  }
}

export default NavBar;
