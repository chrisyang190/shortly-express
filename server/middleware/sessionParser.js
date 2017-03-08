var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  var agent = req.get('User-Agent');
      console.log('agent', agent);
  // console.log('In sessionParser: request', req);
  // console.log('In sessionParser: request.cookie', req.cookies);

  // console.log('In sessionParser: response', res);
  // console.log('In sessionParser: response.cookie', res.cookies);
  
  //condition for no cookies
  if (Object.keys(req.cookies).length === 0 && req.cookies.constructor === Object) { // if session 
    console.log('is empty');
    req.session = {};
    req.session.hash = util.hashPassword((Math.floor((Math.random() * 5555555555))).toString(), function(hash) {
      return hash;
    });
    Sessions.initializeSession(req.session, function() {

    });
      
    // res.cookies; 
    next();
  }

  // var agent = req.get('User-Agent'); // returns the information about browser...
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
