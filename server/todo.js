const userIds = require("./todos");

const PersonalTodos = function (request, response) {
  const PlayerId = request.params.PlayerId;

  const todo = userIds.find((userId) => userId.id === parseInt(PlayerId));
  console.log(todo);
  todo
    ? response.status(200).json(todo)
    : response.status(400).json({ msg: "todo not found" });
  console.log(`Params picked up from the URL`);
};

module.exports = PersonalTodos;
