import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "../assets/scss/main.scss";

import TopBar from "./layout/TopBar";
import LandingPage from "./layout/LandingPage";

const App = (props) => {

  return (
    <Router>
      <TopBar />
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
};

export default hot(App);
