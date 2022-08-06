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
        <Link to="/">HOME</Link>
        <Link to="/">BLOCKS</Link>
        <Link to="/">TXNS</Link>
      </div>
      <div className="container--info">
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;
