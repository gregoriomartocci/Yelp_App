import axios from "axios";
import queryString from "query-string";

export const get = (params) => {
  const query = queryString.stringify(params);
  return axios.get(`/search?${query}`);
};
