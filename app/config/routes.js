// Inclue the React library
import React from "react";
import Main from "../components/Main";
// Include the react-router module
// let router = require("react-router");
import {Route, Router, IndexRoute, hashHistory} from "react-router";
// Include the Route component for displaying individual routes
// let Route = router.Route;

// let router = require("react-router");
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
// let Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// let hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
// let IndexRoute = router.IndexRoute;

// Reference the high-level components
// let Main = require("../components/Main");



// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Child1 then show the appropriate component*/}
    

    </Route>
  </Router>
);