import "../style/navBar.css";
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navBar">
      <div className="container--logo">
        <div className="logo" />
        <div className="title">Honeyscan</div>
      </div>
      <div className="container--menu">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">BLOCKS</Link>
          </li>
          <li>
            <Link to="/">TXNS</Link>
          </li>
        </ul>
      </div>
      <div className="container--info">Login</div>
    </nav>
  );
}

export default NavBar;
