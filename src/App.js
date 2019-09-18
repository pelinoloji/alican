import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Works from "./Works/Works";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Works} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
