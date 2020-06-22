const bcrypt = require('bcrypt');

const db = require('../db.js');

const userController = {};
const saltRounds = 10;

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username.length || !password.length) {
    return next({
      log: 'Error in createUser middleware',
      message: { err: 'Nothing was entered into username/password' },
    });
  } else {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return next({
          log: 'Error in encrypting password in createUser',
          message: { error: `Error from bcrypt: ${err}` },
        });
      }
      const query =
        'INSERT INTO users (username, password) VALUES($1, $2) RETURNING *';
      const values = [username, hash];
      db.query(query, values, (err, data) => {
        if (err)
          return next({
            log: 'Error adding user in createUser',
            message: { error: `Error from database: ${err}` },
          });
        res.locals.user = { username };
        return next();
      });
    });
  }
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;

  return next();
};

module.exports = userController;
