const mssql = require("mssql");
require("env").config();
const User = process.env.USERNAME;
const password = process.env.PASSWORD;
const databaseName = process.env.DB_NAME;

const SqlConfig = {
  username: User,
  password: password,
  database: databaseName,
  server: "localhost",
  pool: {
    min: 0,
    max: 1000,
  },
};
const claim = function (request, response) {
  mssql.connect(SqlConfig);
};
