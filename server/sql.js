const mssql = require("mssql");
// require("dotenv").config();
// const User = process.env.USERNAME;
// const password = process.env.PASSWORD;
// const databaseName = process.env.DB_NAME;

// const SqlConfig = {
//   user: "ANNYSETH/ANYSETH",
//   port: 1443,
//   // password: "40Reen@7239",
//   database: "TodoList",
//   server: "localhost",
//   // requestTimeout: 15000,
//   stream: true,
//   // pool: {
//   //   max: 10,
//   //   min: 0,
//   //   idleTimeoutMillis: 30000,
//   // },
//   options: {
//     keepAlive: true,
//     encrypt: true,
//     enableArithAbort: true,
//     trustServerCertificate: true,
//     trustedConnection: true,
//     connectiontimeout: 15000,
//   },
// };

// mssql.connect(SqlConfig, (err) => {
//   if (err) {
//     console.log("Connection error:", err);
//     // Handle the connection error here, such as sending an error response.
//     // response.status(500).send("Internal Server Error");
//   } else {
//     console.log("Database connected");

//     const req = new mssql.Request();
//     req.query("SELECT * FROM Todo_List", function (err, recordset) {
//       if (err) {
//         console.log("Query error:", err);
//         // Handle the query error here, such as sending an error response.
//         // response.status(500).send("Internal Server Error");
//       } else {
//         console.log(recordset.recordset);
//         // Send a success response with the query results.
//         // response.status(200).send(recordset);
//       }

//       // Close the connection after handling the request
//       mssql.close();
//     });
//   }
// });

const sqlConfig = {
  user: "sa",
  password: "40Reen@7239",
  database: "TodoList",
  server: "localhost",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

let cal = async function () {
  try {
    await mssql.connect(sqlConfig);
    const result = await sql.query(`select * from Todo_List`);
    console.log(result);
  } catch (err) {
    console.log("there is an error", err);
  }
};

module.exports = cal;

cal();
