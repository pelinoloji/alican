import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navbar col-3">
      <nav>
        <div className="Logo">Logo</div>
        <ul>
          <li>
            <Link to="/ui-ux">UI/ UX</Link>
          </li>
          <li>
            <Link to="/textile">Textile</Link>
          </li>
          <li>
            <Link to="/print">Print</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
        <div className="Contact">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
