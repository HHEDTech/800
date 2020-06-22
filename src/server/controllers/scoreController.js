const db = require('../db.js');
const scoreController = {};

scoreController.addScore = (req, res, next) => {
  const { username, score } = req.body;
  return next();
};

scoreController.getHighScores = (req, res, next) => {
  return next();
};

module.exports = scoreController;
