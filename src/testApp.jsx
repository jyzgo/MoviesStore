import React, { Component } from "react";
import Products from "./test/products";
import Posts from "./test/admin/posts";
import Dashboard from "./test/admin/dashboard";
import Home from "./test/home";
import NotFound from "./test/notFound";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetails from "./test/productDetail";
class TestApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Test app </h1>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" exact component={Products} />
            <Route path="/posts" component={Posts} />
            <Redirect from="/msg" to="/posts" />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/home" component={Home} />
            <Route path="/" exact component={Home} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TestApp;
