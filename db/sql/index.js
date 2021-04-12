const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
  console.log('NOT RUNNING', err);
  } else {
    console.log('CONNECTED!')
  }
});

module.exports = connection;