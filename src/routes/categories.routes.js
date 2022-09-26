const express = require('express');
const jwt = require('../middlewares/Jwt');
const categoriesController = require('../controllers/categories.controller');

const categoriesRoute = express.Router();

categoriesRoute.post('/', jwt.jwtValidate, categoriesController.postCategoriesController);
categoriesRoute.get('/', jwt.jwtValidate, categoriesController.getAllCategoriesController);

module.exports = categoriesRoute;