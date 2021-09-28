import React, { useEffect, useState } from "react";
import "./Search.css";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useReactRouter from "use-react-router";

function Search({ setSearchParams }) {
  const { history } = useReactRouter();
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  let term = params.get("term");
  let locationParam = params.get("location");
  let sort = params.get("sort_by");

  if (term == null || !term) {
    term = "Burguers";
  }

  if (locationParam == null || !locationParam) {
    locationParam = "New York";
  }

  if (sort == null || !sort) {
    sort = "rating";
  }

  const [input, setInput] = useState({
    term: "",
    location: "",
  });

  const search = async () => {
    const encondedTerm = encodeURI(input.term);
    const encondedLocation = encodeURI(input.location);
    setSearchParams({
      term: input.term || "burguer",
      location: input.location || "new york",
      sort_by: sort || "rating",
    });
    history.push(
      `/search?term=${encondedTerm}&location=${encondedLocation}&sort_by=${sort}`
    );
  };

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="search-bar">
      <div className="search-icon">
        <BiSearch />
      </div>
      <div>
        <input
          className="search-input"
          name="term"
          value={input.term}
          placeholder="search for a service"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        ></input>
      </div>
      <div className="location-icon">
        <HiOutlineLocationMarker />
      </div>
      <div>
        <input
          className="location-input"
          placeholder="search for location"
          name="location"
          value={input.location}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        ></input>
      </div>
      <div className="search-btn" onClick={() => search()}>
        Search
      </div>
    </div>
  );
}

export default Search;
