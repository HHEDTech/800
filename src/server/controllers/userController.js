const bcrypt = require('bcrypt');

const db = require('../db.js');

const userController = {};
const saltRounds = 10;

userController.createUser = (req, res, next) => {
  console.log('Entering createUser');
  const { username, password } = req.body;
  if (!username.length || !password.length) {
    return next({
      log: 'Error in createUser middleware',
      message: { err: 'Nothing was entered into username/password' },
    });
  }
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
};

userController.verifyUser = (req, res, next) => {
  console.log('Entering verify user');
  const { username, password } = req.body;
  if (!username.length || !password.length) {
    return next({
      log: 'Error in verifyUser middleware, no username/password entered',
      message: { err: 'Nothing was entered into username/password' },
    });
  }
  // Query db for valid user
  const query = 'SELECT * FROM users WHERE username=$1';
  const values = [username];
  db.query(query, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error verifying user in DB',
        message: { error: `Error from DB: ${err}` },
      });
    }
    try {
      console.log(data.rows);
      const { password: hashPW } = data.rows[0];
      // Compare db password to entered password
      bcrypt.compare(password, hashPW, (err, result) => {
        if (result) {
          console.log('password correct');
          res.locals.user = { username };
          return next();
        } else return res.redirect('/signup');
      });
    } catch {
      return next({
        log: 'Error verifying user in DB',
        message: { error: `No data returned from db` },
      });
    }
  });
};

module.exports = userController;
