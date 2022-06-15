const express = require('express');
const routes = express.Router();

// welcome
routes.get('/', (req, res) => {
  res.respondGet(null, 'welcome to Old But New!');
});

module.exports = routes;
