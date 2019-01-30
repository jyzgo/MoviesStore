import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavbarMovie from "./components/NavbarMovie";
import Movies from "./movies";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavbarMovie />
        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect from="/" to="/movies" />
          </Switch>
        </main>
        {/* <Movies /> */}
      </div>
    );
  }
}

export default App;
