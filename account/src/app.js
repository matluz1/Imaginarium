const express = require('express');
const cookieParser = require('cookie-parser');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
