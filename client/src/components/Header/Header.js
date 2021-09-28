import React from "react";
import "./Header.css";
import Search from "../Search/Search.js";
import SubHeader from "../Filters/SubHeader";

function Header({
  term,
  location,
  setData,
  setLoading,
  setError,
  setSearchParams,
}) {
  return (
    <>
      <div className="header">
        <div className="top-header">
          <img className="logo" src="/img/logo-01.svg" alt=""></img>
          <Search
            term={term}
            location={location}
            setData={setData}
            setLoading={setLoading}
            setError={setError}
            setSearchParams={setSearchParams}
          />
        </div>
        <SubHeader
          location={location}
          filterBusiness={setSearchParams}
        />
      </div>
    </>
  );
}

export default Header;
