const express = require('express');
const routes = express.Router();
const auth = require('./users/auth');
const profile = require('./users/profile');
const product = require('./product');

// welcome
routes.get('/', (req, res) => {
  res.respondGet(null, 'welcome to Old But New!');
});
// login
routes.use('/auth', auth);
routes.use('/profile', profile);
routes.use('/product', product);
module.exports = routes;
