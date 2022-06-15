const express = require('express');
const routes = express.Router();
const auth = require('../../controllers/users/auth/authController');
// welcome
routes.post('/register', auth.register); //register basic
routes.post('/register', auth.register); // register google

module.exports = routes;
