const express = require('express');
const routes = express.Router();
const product = require('../../controllers/product/indexController');
const { login } = require('../../middlewares/auth');
// welcome
routes.post('/add', login, product.add);

module.exports = routes;
