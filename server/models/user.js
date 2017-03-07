var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

module.exports = {
  getUsers: function() {
    var queryString = 'SELECT * FROM users';
    return db.queryAsync(queryString);
  },

  validateUser: function(userinfo, callback) {
    var queryString = 'SELECT * FROM users where username = "' + userinfo[0] + '" and password = "' + userinfo[1] + '"';
    db.queryAsync(queryString, userinfo, function(err, results) {
      if (err) {
        console.log('Unsucessful validateUser');
      }
      // console.log('results:', results);
      callback(results);
    });
  },

  postUser: function (userinfo, callback) {
    var queryString = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.queryAsync(queryString, userinfo, function(err, results) {
      if (err) {
        console.log('Unsuccessful postUser');
      }

      callback(err, results);
    });
  },
};

