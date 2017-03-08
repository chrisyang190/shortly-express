var db = require('../db');
var util = require('../lib/utility');

// Write you session database model methods here

module.exports = {

  getSession: function (token) {
    var queryString = 'SELECT * from sessions where hash = ?';
    return db.queryAsync(queryString, token).then(function(results) {
      var session = results[0][0];

      if (!session || !session.user_id) {
        return session;
      }

      return db.queryAsync('SELECT username from users where id = ?', session.user_id).then(function(result) {
        session.users = result[0][0];
        return session;
      });
    });
  },

  initialize: function(agent) {
    var salt = util.generateSalt();
    var hash = util.generateHash(agent, salt);

    var queryString = 'INSERT INTO sessions SET ?';
    return db.queryAsync(queryString, { hash: hash, salt: salt }).return(hash);
  },

  assignSession: function(user, sessionHash) {
    var queryString = 'UPDATE sessions SET user_id = ? WHERE hash = ?';
    return db.queryAsync(queryString, [user.id, sessionHash]).return(user);
  },

  destroySession: function(token) {
    var queryString = 'DELETE FROM sessions WHERE hash = ?';
    return db.queryAsync(queryString, token);
  }



             
};
