const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// console.log(path.join(__dirname, '../../index.html'));
if(process.env.NODE_ENV === 'production') {
app.use('/build', express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});
}
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
