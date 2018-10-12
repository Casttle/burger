const orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: (burgerName, cb) => {
      orm.insertOne("burgers", burgerName, (res) => {
        cb(res);
      });
    },
    updateOne: (condition, cb) => {
      orm.updateOne("burgers", condition, (res) => {
        cb(res);
      });
    }
};

module.exports = burger;