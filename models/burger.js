const orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: (burgerName, cb) => {
      orm.insertOne("burgers", burgerName, cb);
    },
    updateOne: (id, cb) => {
      var condition = `id=${id}`
      orm.updateOne("burgers", {devoured: true}, condition, cb);
    }
};

module.exports = burger;