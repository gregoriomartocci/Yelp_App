/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import * as api from "./api";
export const BusinessesSearch = (term, location, sort_by) => {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResult] = useState();
  const [searchParams, setSearchParams] = useState(term, location, sort_by);

  useEffect(() => {
    setBusinesses([]);
    const search = async () => {
      try {
        console.log("search params ===>", searchParams);
        const { data } = await api.get(searchParams);
        setBusinesses([...data.businesses]);
        setAmountResult(data.total);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [searchParams]);

  return [
    businesses,
    amountResults,
    searchParams,
    setBusinesses,
    setSearchParams,
  ];
};
