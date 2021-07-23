import queryString from "query-string";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return axios.get(
    `${"https://cors-anywhere.herokuapp.com/"}${REACT_APP_BASE_URL}${path}?${query}`,
    {
      headers: {
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
        withCredentials: true,
      },
    }
  );
}

// /businesses/search?location=usa
