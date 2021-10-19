import React from "react";
import SearchBox from "./SearchBox";
import "../css/nav-bar.css";
function Navbar() {
  return (
    <nav className="row">
      <p className="navbar-brand">Weather</p>
      <SearchBox />
      <div />
    </nav>
  );
}

export default Navbar;
