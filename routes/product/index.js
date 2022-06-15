const express = require('express');
const routes = express.Router();
const product = require('../../controllers/product/indexController');
// welcome
routes.post('/add', product.add);

module.exports = routes;
