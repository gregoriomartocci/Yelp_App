import React from "react";
import useReactRourer from "use-react-router";
import useBusinessSearch from "../../Hooks/yelp-api/useBusinessSearch";

import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import "./Main.css";

function Main() {
  const { location } = useReactRourer();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  function search(term, location) {
    performSearch({ term, location });
  }

  // console.log("term y location ===>", term, locationParam);

  return (
    <>
      <Header term={term} location={locationParam} search={search} />
      <div className="main">
        <Cards businesses={businesses} />
      </div>
    </>
  );
}

export default Main;
