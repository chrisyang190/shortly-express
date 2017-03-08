var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  // var agent = req.get('User-Agent');
  //   console.log('agent', agent);
  var agent = (Math.floor((Math.random() * 5555555555))).toString();
  console.log('agent', agent);
  // console.log('In sessionParser: request', req);
  
  //if there is no cookie, initialize session
  if (!req.cookies.shortlyid) {
    return Sessions.initialize(agent).then(function(hash) {
      res.cookie('shortlyid', hash);
      next();
    });
  }

  //if there is a cookie
  Sessions.getSession(req.cookies.shortlyid).then(function(session) {
    //but there is no session
    if (!session) {
      res.clearCookie('shortlyid');
      return next();
    }

    // console.log('I am here');
    // if session id not valid, destroy session
    if (!util.compareHash(agent, session.hash, session.salt)) {
      return Sessions.destroySession(session.hash)
        .then(function() {
          res.clearCookie('shortlyid');
          next();
        });
    }

    req.session = session;
    next();
  });

};

module.exports = createSession;
