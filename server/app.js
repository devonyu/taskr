const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));

app.get('/ping', (req, res) => {
  console.log('/ping route hit, returning pong');
  res.status(418).send('pong');
})

app.get('*', (req, res) => {
  console.log('catch all with *');
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

module.exports = app;
