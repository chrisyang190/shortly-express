var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  console.log('In sessionParser: request', req);
  console.log('In sessionParser: request.cookie', req.cookies);

  // console.log('In sessionParser: response', res.cookie);
  
  if (Object.keys(req.cookies).length === 0 && req.cookies.constructor === Object) { // if session 
    console.log('is empty');
    req.session = {};
    req.session.hash = Math.random() 
  //   // res.cookie =
  // } else { // if session already exists

  }
};

module.exports = createSession;
