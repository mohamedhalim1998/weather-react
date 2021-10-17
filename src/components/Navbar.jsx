import React from "react";
import SearchBox from "./SearchBox";
import "../css/nav-bar.css";
function Navbar() {
  return (
    <nav className="row">
      <a className="navbar-brand" href="#">
        Weather
      </a>
      <SearchBox />
      <div />
    </nav>
  );
}

export default Navbar;
