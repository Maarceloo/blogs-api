const express = require('express');
const userValidation = require('../middlewares/userValidation');
const userController = require('../controllers/user.controller');
const jwt = require('../middlewares/Jwt');

const userRoute = express.Router();

userRoute.post('/', userValidation.userValidation, userController.userRegisterController);

userRoute.get('/', jwt.jwtValidate, userController.userGetAllController);

module.exports = userRoute;