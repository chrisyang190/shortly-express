var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

module.exports = {
  getUsers: function() {
    var queryString = 'SELECT * FROM users';
    return db.queryAsync(queryString);
  },
  postUser: function (userinfo, callback) {
    var queryString = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.queryAsync(queryString, userinfo, function(err, results) {
      if (err) {
        console.log('Unsuccessful postUser');
      }
      callback(results);
    });
  },
};

