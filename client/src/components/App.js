import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "../assets/scss/main.scss";

import TopBar from "./layout/TopBar";
import LandingPage from "./layout/LandingPage";

const App = (props) => {

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default hot(App);
