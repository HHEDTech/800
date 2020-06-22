const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.listen(PORT, () => {
  `APP listening on port: ${PORT}`;
});
