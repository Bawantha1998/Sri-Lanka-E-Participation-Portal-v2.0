const mysql = require("mysql");

const db = mysql.createConnection({
  host: "10.250.1.103",
  user: "epart",
  password: "epart@1234ICTA",
  database: "stagepart",
});

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   port:"3306",
//   password: "",
//   database: "eppp",
// });

// Handle database connection errors
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database.");
  }
});
module.exports = db;
