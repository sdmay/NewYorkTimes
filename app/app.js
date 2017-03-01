// Include the Main React Dependencies
import React from "react";
// let ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
// Grabs the Routes
// let routes = require("./config/routes");
import routes from "./config/routes";

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
