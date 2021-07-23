import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import useReactRouter from "use-react-router";

function Search(props) {
  const { history } = useReactRouter();
  const [input, setInput] = useState({
    term: props.term || "",
    location: props.location || "",
  });

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSumbit = () => {
    if (typeof props.search === "function") {
      props.search(input.term, input.location);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-icon">
        <FaSearch />
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
        <HiLocationMarker />
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
      <div className="search-btn" onClick={onSumbit}>
        Search
      </div>
    </div>
  );
}

export default Search;

