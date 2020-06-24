const db = require('../db.js');
const jwt = require('jsonwebtoken');

const sessionController = {};
const TOKEN_SECRET = 'secretToken';

sessionController.createSession = (req, res, next) => {
  const { username } = res.locals.user;
  const accessToken = jwt.sign({ username }, TOKEN_SECRET);
  res.cookie('accessToken', accessToken, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });
  return next();
  // const query = `INSERT INTO sessions (username, token) VALUES ($1, $2) RETURNING *`;
  // const values = [username, accessToken];
  // db.query(query, values, (err, data) => {
  //   if (err)
  //     return next({
  //       log: 'Error creating session in createSession',
  //       message: { error: `Error from database: ${err}` },
  //     });
  //   res.locals.session = data.rows[0];
  //   console.log(
  //     'This is res.locals.session in createSession',
  //     res.locals.session
  //   );
  //   return next();
  // });
};

sessionController.verifySession = (req, res, next) => {
  console.log('Entering verifySession, here are cookies: ', req.cookies);
  const { accessToken } = req.cookies;
  jwt.verify(accessToken, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log('Error in verifySession', err);
      return next({
        log: 'Error checking session validity in verifySession',
        message: { error: `Error in verifySession: ${err}` },
      });
    }
    // Decoded should contain the userId that it was signed with
    console.log('decoded->', decoded);
    res.locals.user = decoded;
    return next();
  });
  // const query = `SELECT FROM sessions WHERE token = $1`;
  // const values = [accessToken];
  // db.query(query, values, (err, data) => {
  //   if (err)
  //     return next({
  //       log: 'Error finding session in veryifySession',
  //       message: { error: `Error from database: ${err}` },
  //     });
  //   else if (data.rows[0].token === accessToken) {
  //     res.locals.verified = true;
  //     return next();
  //   }
  // });
};

module.exports = sessionController;
