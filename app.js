const express = require('express');
const path = require('path');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
