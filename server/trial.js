const Connection = require("tedious").Connection;
const Request = require("tedious").Request;
const TYPES = require("tedious").TYPES;

const config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      username: "sa",
      password: "40Reen@7239",
    },
  },
  options: {
    trustServerCertificate: true,
    database: "TodoList",
  },
};

const connection = new Connection(config);

connection.on("connect", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected successfully");
  }
});
connection.connect();

// const sql = require("mssql");

// const sqlConfig = {
//   user: "sa",
//   password: "40Reen@7239",
//   server: "ANNYSETH",
//   database: "TodoList",
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//     instanceName: "sqlexpress",
//     connectTimeout: 30000, // 30 seconds
//     requestTimeout: 30000,
//   },
// };

// const connection1 = async () => {
//   try {
//     const promise = await sql.connect(sqlConfig);
//     const result = await sql.query("select * from Todo_List");
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// connection1();
