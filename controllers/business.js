const axios = require("axios");
require("dotenv").config();

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const search = async (req, res) => {
  let { term, location, sort_by } = req.query;

  if (term == "null" || !term) {
    term = "Burguers";
  }

  if (location == "null" || !location) {
    location = "New York";
  }

  if (sort_by == "null" || !sort_by) {
    sort_by = "rating";
  }

  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}/businesses/search?term=${encodeURI(
        term
      )}&location=${encodeURI(location)}${
        sort_by && sort_by != null && `&sort_by=${sort_by}`
      }`,
      {
        headers: {
          Authorization: `Bearer ${REACT_APP_API_KEY}`,
          withCredentials: true,
        },
      }
    );
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const details = (req, res) => {
  res.send("route for details");
};

module.exports = {
  search,
  details,
};
