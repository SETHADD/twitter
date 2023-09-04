const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const app = express();
app.use(cors());

// Creating the endpoint.
app.get("/", (request, response) => {
  response.status(200).json("I can be heard loud and clear");
});

app.get("/tweets", async (request, response) => {
  const API = `https://api.twitter.com/2/users/by/username/$USERNAME-HAuthorization:Bearer$ACCESS_TOKEN`;
  const res = await axios.get(API);
  response.json(res);
});

// Checking the working port.
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
