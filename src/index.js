import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import AppFooter from "./components/AppFooter/AppFooter";
import * as serviceWorker from "./serviceWorker";
import "./styles/main.scss";

/*
  This is a simple example where instead of using a root div and proper semantic hierarchy of
  HTML elements, I've retained them. This isn't necessarily the best solution, but its here to
  demonstrate that it isn't wise for a11y or good standards to stick an entire 'app' inside of
  one div as the create-react-app boilerplate example demonstrates.
*/
ReactDOM.render(<AppHeader />, document.getElementById("appHeader"));
ReactDOM.render(<AppMain />, document.getElementById("appMain"));
ReactDOM.render(<AppFooter />, document.getElementById("appFooter"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
