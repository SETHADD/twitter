function game(request, response) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randonNum = arr[Math.floor(Math.random() * arr.length)];

  // creating a query ability in my API
  const search = request.query;
  if (search === randonNum) {
    response
      .status(200)
      .json(`WOW! You guessed right the number is ${randonNum}`);
  } else {
    response
      .status(200)
      .json(`SORRY YOU GUESSED WRONG!! The number is ${randonNum}`);
  }

  // (search===randonNum)?response.status(200).json(`WOW! You guessed right the number is ${randonNum}`):    response.status(200).json(`SORRY YOU GUESSED WRONG!! The number is ${randonNum}`);

  console.log(randonNum);
}

module.exports = game;
