import React from "react";
import "./Header.css";
import Search from "../Search/Search.js";

function Header({ term, location, search }) {
  return (
    <div className="header">
      <div>
        <img className="logo" src="/img/logo-01.svg" alt=""></img>
      </div>
      <Search term={term} location={location} search={search} />
      <div></div>
    </div>
  );
}

export default Header;
