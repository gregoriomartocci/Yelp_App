import { useState, useEffect } from "react";
import * as api from "./api";

function useBusinessSearch(term, location) {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {

      try {
        const { data } = await api.get("/businesses/search", searchParams);
        setBusinesses(data.businesses);
        setAmountResults(data.total);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchParams]);

  return [businesses, amountResults, searchParams, setSearchParams];
}

export default useBusinessSearch;
