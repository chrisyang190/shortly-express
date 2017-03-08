var parseCookies = function(req, res, next) {
  //console.log('request in cookieParser here', req);
  //console.log('request in cookieParser headers/cookie object here', req.headers.cookie);
  console.log('type', typeof req.headers.cookie);
  // console.log('look for request object', req); 
  // req.cookie
  if (!req.headers.cookie) {
    return;
  }

  // var cookieArray = req.get('Cookie') || '';
  var cookieArray = (req.headers.cookie).split(';');
  // console.log('array', cookieArray);
  cookieArray.forEach(function(item) {
    item = item.split('=');
    // console.log('item', item);
    req.cookies[item[0].trim()] = item[1].trim();
  });

  next();
  // console.log('cookies in request:', req.cookies);
};

module.exports = parseCookies;