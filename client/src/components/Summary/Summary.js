import React, { useEffect, useState } from "react";
import { lowest_rated } from "../../utils";
import Dropdown from "../Dropdown/Dropwdown";
import "./Summary.css";
import useReactRouter from "use-react-router";

const data = [
  { id: 1, name: "Recomended", value: "best_match" },
  { id: 2, name: "Highest Rated", value: "rating" },
  { id: 3, name: "Lowest Rated", value: "lowest_rated" },
  { id: 4, name: "Most Reviewed", value: "review_count" },
];

function Summary({
  term,
  location,
  amountResults,
  shownResults,
  setBusinesses,
  businesses,
  sort,
}) {
  const [sortSelect, setSortSelect] = useState([]);
  const { history } = useReactRouter();
  useEffect(() => {
    const encondedTerm = encodeURI(term);
    const encondedLocation = encodeURI(location);
    const encondedSort = encodeURI(sortSelect[0]?.value);

    if (sortSelect.length) {
      const sort_by = sortSelect[0]?.value;
      if (sort_by !== "lowest_rated") {
        sort({ term, location, sort_by });
        history.push(
          `/search?term=${encondedTerm}&location=${encondedLocation}&sort_by=${encondedSort}`
        );
      } else {
        setBusinesses(lowest_rated(businesses));
      }
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortSelect]);

  let result = null;
  if (amountResults && shownResults) {
    result = (
      <p>
        Showing 1-{shownResults} out of {amountResults} results
      </p>
    );
  }

  return (
    <div className="summary order">
      <div className="search-summary-left">
        <div className="search-summary">
          <span className="search-summary-term">{term}</span>
          <span className="search-summary-location">
            {location !== "null" && location}
          </span>
        </div>
        <div className="search-summary-result">{result}</div>
      </div>
      <div className="search-summary-right">
        <Dropdown
          title="Sort"
          name="sort_by"
          items={data}
          selection={sortSelect}
          setSelection={setSortSelect}
          filter={false}
          setBusinesses={setBusinesses}
        />
      </div>
    </div>
  );
}

export default Summary;
