import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="nav-bar">
    <h1>Math Magician</h1>
    <ul className="nav-items">
      <li>
        <Link to="/" className="item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className="item">
          Calculator
        </Link>
      </li>
      <Link to="/quote" className="item">
        quote
      </Link>
    </ul>
  </div>
);

export default NavBar;
