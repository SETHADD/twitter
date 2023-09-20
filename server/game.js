function game(request, response) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randonNum = arr[Math.floor(Math.random() * arr.length)];
  response.status(200).json(randonNum);
}

module.exports = game;
