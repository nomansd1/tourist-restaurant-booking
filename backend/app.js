'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sendEmail } = require('./global-functions/GlobalFunctions');
const path = require('path');

// Import routes for authentication
const userLogin = require('./routes/auth');
const userSignUp = require('./routes/auth');
const managerLogin = require('./routes/auth');
const adminLogin = require('./routes/auth');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Custom middleware to set CORS headers
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
app.use('/api/auth/', userLogin);
app.use('/api/auth/', userSignUp);
app.use('/api/auth/', managerLogin);
app.use('/api/auth/', adminLogin);

module.exports = app;
