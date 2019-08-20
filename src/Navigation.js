import React from "react";
import "./Navigation.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import Contact from "./Contact";

const Navigation = () => {
  return (
    <Router>
      <div className="Navbar">
        <nav>
          <div className="Logo">Logo</div>
          <ul>
            <li>
              <NavLink to="/ui-ux">UI/ UX</NavLink>
            </li>
            <li>
              <NavLink to="/textile">Textile</NavLink>
            </li>
            <li>
              <NavLink to="/print">Print</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
          </ul>
          <div className="Contact">
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <Switch>
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
