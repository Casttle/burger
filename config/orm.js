const connection = require("./connection.js");

var orm = {
    selectAll: (table, cb) => {
      var queryString = `SELECT * FROM ${table};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  insertOne: (table, burgerName, cb) => {
      var queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;
      console.log(queryString);
      connection.query(queryString, burgerName, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  updateOne: (table, devoured, condition, cb) => {
    var queryString = `UPDATE ${table} SET ? WHERE ?`;
    console.log(queryString);
    connection.query(queryString, devoured, condition, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;