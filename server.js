const express = require('express');
const app = express();

const routes = require('./routes/routes.js');

app.use('/', routes);
app.use(express.static('assets'));

app.listen(3000, function () {
  console.log('Server started on port 3000!');
});