import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Movies from "./movies";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import TestApp from "./testApp";
import MovieRow from "./components/MovieRow";
ReactDOM.render(
  <BrowserRouter>
    <Movies />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
