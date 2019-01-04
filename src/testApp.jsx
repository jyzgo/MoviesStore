import React, { Component } from "react";
import Products from "./test/products";
import Posts from "./test/posts";
import Dashboard from "./test/dashboard";
import Home from "./test/home";
import { Route } from "react-router-dom";
class TestApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="content">
          <h1> Test app </h1>
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Home} />
        </div>
      </div>
    );
  }
}

export default TestApp;
