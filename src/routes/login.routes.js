const express = require('express');
const { loginController } = require('../controllers/login.controller');
const loginValidation = require('../middlewares/loginValidation');

const loginRoute = express.Router();

loginRoute.post('/', loginValidation, loginController);

module.exports = loginRoute;