const express = require('express');
const jwt = require('../middlewares/Jwt');
const validate = require('../middlewares/postValidation');
const postController = require('../controllers/post.controller');

const postRoute = express.Router();

postRoute.post('/', jwt.jwtValidate, validate.postValidate, postController.newPostController);

module.exports = postRoute;