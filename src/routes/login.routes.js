const express = require('express');
const { loginController } = require('../controllers/login.controller');
const bodyValidation = require('../middlewares/login/bodyValidation');

const loginRoute = express.Router();

loginRoute.post('/', bodyValidation, loginController);

module.exports = loginRoute;