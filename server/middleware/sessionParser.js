var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  console.log('In sessionParser: request', req);
  console.log('In sessionParser: request.cookie', req.cookies);

  // console.log('In sessionParser: response', res.cookie);
  
  if (Object.keys(req.cookies).length === 0 && req.cookies.constructor === Object) { // if session 
    console.log('is empty');
    req.session = {};
    // req.session.hash = Math.random();
  //   // res.cookie =
  // } else { // if session already exists
  }

  var agent = req.get('User-Agent'); // returns the information about browser...
  // look for cookie
    // if nonexistent
      //initiate new cookie
    // if yes
      //validate
        // if not valid, delete
            //return next() to prevenit from going down to the final next() 
        // if valid, save the session


    //next() can only be called once, if this is called twice in express, an error will occur
};

module.exports = createSession;
