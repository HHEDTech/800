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
};

sessionController.verifySession = (req, res, next) => {
  console.log('Entering verifySession, here are cookies: ', req.cookies);
  const { accessToken } = req.cookies;
  if (accessToken) {
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
  } else res.status(200).json({ highscore: 0, username: '' });
};

module.exports = sessionController;
