const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const routes = require("./routes/index.js");

if (!process.env.NODE_ENV === "dev") {
}

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`); // eslint-disable-line no-console
});
