const db = require('../db.js');
const sessionController = {};

sessionController.createSession = (req, res, next) => {
  const { username } = res.locals.user
  const query = `INSERT INTO sessions (username) VALUES ($1) RETURNING *`;
  const values = [username]
  db.query(query, values, (err, data) => {
    //getting back session_id, username, timestamp

  });
};

sessionController.verifySession = (req, res, next) => {
  const session_id = 'current session id';
  const query = `SELECT FROM sessions WHERE session_id = ${session_id}`;
  const { username } = db.query(query);
  if
};
module.exports = sessionController;
