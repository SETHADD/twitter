const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const app = express();
app.use(cors());
const game = require("./game");
//Enable the ability to update and post data
app.use(express.json());

// create a json file
const userIds = [
  { username: "user1", trophy: 1, id: 1 },
  { username: "user2", trophy: 2, id: 2 },
  { username: "user3", trophy: 4, id: 3 },
];

// Creating the endpoint for the homepage.
app.get("/", (request, response) => {
  response.status(200).json("I can be heard loud and clear");
});

//creating a middleware of the current time
app.use("/tweets", (request, response, next) => {
  console.log(`${new Date()}`);
  //call the next function to pass on to the next middleware
  next();
});

app.get("/tweets", async (request, response) => {
  const API = `https://api.twitter.com/1.1/statuses/show.json?id=210462857140252672`;
  const res = await axios.get(API);
  response.status(200).json(res);
});

// Creating the request parameters for the URL
app.get("/game/:PlayerId", (request, response) => {
  const PlayerId = request.params.PlayerId;
  // response.status(200).send(`PlayerId: ${PlayerId}`);
  // response.status(200).json({
  //   data: userIds.find((userId) => {
  //     userId.id === PlayerId;
  //   }),
  // });
  const todo = userIds.find((userId) => {
    userId.id === parseInt(PlayerId);
  });
  console.log(todo);
  todo
    ? response.status(200).json({ data: todo })
    : response.status(400).json({ msg: "todo not found" });
  console.log(`Params picked up from the URL`);
});

//endpoint for the game
app.get("/game", game);

// creating the posting endpoint
app.post("/game", (request, response) => {
  const ratings = request.body;
  response.status(200).json({ comment: ratings });
  console.log("Comment successfully posted");
});

// Checking the working port.
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
