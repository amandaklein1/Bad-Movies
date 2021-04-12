//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {
  saveItem: function (params, callback) {
    var queryStr = 'insert into favorites(id, movieName, genreID) value (?, ?, ?)';
    sqlDb.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },

  deleteItem: function (params, callback) {
    var queryStr = 'delete from favorites where id=(?)';
    sqlDb.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
}