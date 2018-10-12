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
      var queryString = `INSERT INTO ${table} (burger_name) VALUES( ${burgerName});`;
      console.log(queryString);
      connection.query(queryString, burgerName,(err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  updateOne: (table, condition, cb) => {
    var queryString = `UPDATE ${table} SET devoured = true WHERE ${condition} `;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;