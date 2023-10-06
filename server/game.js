function game(request, response) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNum = arr[Math.floor(Math.random() * arr.length)];

  // creating a query ability in my API
  const search = request.query.searched;
  console.log(`The searched number is ${search}`);
  if (search == randomNum) {
    response
      .status(200)
      .json(`WOW! You guessed right the number is ${randomNum}`);
  } else {
    response
      .status(200)
      .json(`SORRY YOU GUESSED WRONG!! The number is ${randomNum}`);
  }

  // search === randomNum
  //   ? response
  //       .status(200)
  //       .json(`WOW! You guessed right the number is ${randomNum}`)
  //   : response
  //       .status(200)
  //       .json(`SORRY YOU GUESSED WRONG!! The number is ${randomNum}`);

  console.log(randomNum);
}

module.exports = game;
