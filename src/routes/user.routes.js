const express = require('express');
const userValidation = require('../middlewares/userValidation');
const userController = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.post('/', userValidation.userValidation, userController.userController);

module.exports = userRoute;