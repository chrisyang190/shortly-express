var db = require('../db');
var util = require('../lib/utility');

// Write you session database model methods here

module.exports = {

  initializeSession: function (sessioninfo, callback) {
    var queryString = 'INSERT INTO sessions (user_id, hash) VALUES(?,?)';
    db.queryAsync(queryString, sessioninfo, function(err, results) {
      if (err) {
        console.log('Unsuccessful in initializing session');
      }
      callback(err, results);
    });
  }           
};
