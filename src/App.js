import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Works from "./Works";

import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Works {...props} type="all" />}
          />
          <Route
            path="/ui-ux"
            render={props => <Works {...props} type="ui-ux" />}
          />
          <Route
            path="/print"
            render={props => <Works {...props} type="print" />}
          />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
