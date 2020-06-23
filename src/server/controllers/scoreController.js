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

scoreController.getUserScores = (req, res, next) => {
  const { username } = req.body;
  const query = `SELECT * FROM scores WHERE username = ${username}`;
  db.query(query, (err, data) => {
    if (err)
      return next({
        log: 'Error finding high scores in getHighScores',
        message: { error: `Error from database: ${err}` },
      });

    res.locals.userScores = data.rows[0];
    return next();
  });
};

scoreController.getLeaderboard = (req, res, next) => {
  const query = `SELECT * FROM scores`;
  db.query(query, (err, data) => {
    if (err)
      return next({
        log: 'Error finding high scores in getLeaderboard',
        message: { error: `Error from database: ${err}` },
      });
    const scores = data.rows[0];
    scores.sort((a, b) => b - a);
    res.locals.leaderboard = scores;
    return next();
  });
};

module.exports = scoreController;
