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
          <Route path="/contact" component={Contact} />
          <Route path="/ui-ux" component={Works} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
