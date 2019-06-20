const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
  console.log('/ping route hit, returning pong');
  res.status(200).send('pong');
})

app.get('*', (req, res) => {
  console.log('catch all with *');
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server connected, listening on port: ${PORT}`);
})
