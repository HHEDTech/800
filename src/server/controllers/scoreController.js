const db = require('../db.js');
const scoreController = {};

scoreController.addScore = (req, res, next) => {
  const { username, score } = req.body;
  const query = `INSERT INTO scores (username, score) VALUES ($1, $2) RETURNING *`;
  const values = [username, score];
  db.query(query, values, (err, data) => {
    if (err)
      return next({
        log: 'Error adding score in addScore',
        message: { error: `Error from database: ${err}` },
      });
    return next();
  });
};

scoreController.getHighScores = (req, res, next) => {
  const { username } = req.body;
  const query = `SELECT * FROM scores WHERE username = ${username}`;
  db.query(query, (err, data) => {
    if (err)
      return next({
        log: 'Error finding high scores in getHighScores',
        message: { error: `Error from database: ${err}` },
      });
    res.localStorage.highScores = data.rows[0];
    return next();
  });
};
module.exports = scoreController;
