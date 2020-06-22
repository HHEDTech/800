const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
<<<<<<< HEAD

const userController = require('./controllers/userController');
const scoreController = require('./controllers/scoreController');
const sessionController = require('./controllers/sessionController');
=======
>>>>>>> e299f949993e4423c460c8217fab41cc14d7b44c

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// console.log(path.join(__dirname, '../../index.html'));
if(process.env.NODE_ENV === 'production') {
app.use('/build', express.static(path.join(__dirname, '../../build')));

<<<<<<< HEAD
app.use(express.static(path.resolve(__dirname, '../assets')));

app.post(
  '/signup',
  userController.createUser,
  sessionController.createSession,
  (req, res) => {
    return res.status(200).redirect('/');
  }
);

app.post(
  '/login',
  userController.verifyUser,
  sessionController.createSession,
  (req, res) => {
    return res.status(200).redirect('/');
  }
);

app.post(
  '/scores',
  sessionController.verifySession,
  scoreController.addScore,
  (req, res) => {
    return res.status(200).send('Score added');
  }
);
app.get('scores', scoreControler.getHighScores, (req, res) => {
  return res.status(200).json({ highscores: res.locals.highScores });
});

//handle requests for static files
if (process.env.NODE_env === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../../build')));

  app.get('/', (req, res) => {
    // console.log(req)
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, '../../index.html'));
  });
}
app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../../index.html'));
});

//Error handling
app.use('/', (req, res) => {
  res.status(404).send('You made a stupid mistake');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error!',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//Start our server
app.listen(PORT, () => {
  `APP listening on port: ${PORT}`;
=======
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
>>>>>>> e299f949993e4423c460c8217fab41cc14d7b44c
});
}
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
