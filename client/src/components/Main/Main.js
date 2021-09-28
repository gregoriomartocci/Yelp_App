import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import Sumary from "../Summary/Summary";
import axios from "axios";
import "./Main.css";
import Spinner from "../Spinner/Spinner";
import useReactRouter from "use-react-router";
import { BusinessesSearch } from "../../hooks/BusinessSearch";

function Main() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  let term = params.get("term");
  let locationParam = params.get("location");
  let sort = params.get("sort_by");

  if (term === null || !term) {
    term = "Burguers";
  }

  if (locationParam === null || !locationParam) {
    locationParam = "New York";
  }

  if (sort === null || !sort) {
    sort = "rating";
  }

  const [
    businesses,
    amountResults,
    searchParams,
    setBusinesses,
    setSearchParams,
  ] = BusinessesSearch(term, location, sort);

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/search`);
        setBusinesses(data.businesses);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    search();
  }, []);

  return (
    <>
      <Header
        term={term}
        location={locationParam}
        sort={sort}
        setData={setBusinesses}
        setLoading={setLoading}
        setError={setError}
        setSearchParams={setSearchParams}
      />
      <div className="main">
        <Sumary
          term={term}
          location={locationParam}
          amountResults={amountResults}
          shownResults={businesses ? businesses.length : 0}
          setBusinesses={setBusinesses}
          businesses={businesses}
          sort={setSearchParams}
        />
        {loading ? (
          <Spinner />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <Cards data={businesses} />
        )}
      </div>
    </>
  );
}

export default Main;
