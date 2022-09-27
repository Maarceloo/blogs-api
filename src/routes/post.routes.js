const express = require('express');
const jwt = require('../middlewares/Jwt');
const validate = require('../middlewares/postValidation');
const postController = require('../controllers/post.controller');

const postRoute = express.Router();

postRoute.post(
  '/',
  jwt.jwtValidate,
  validate.postValidate,
  postController.newPostController,
);

postRoute.get('/', jwt.jwtValidate, postController.getBlogUserCategory);

postRoute.get('/:id', jwt.jwtValidate, postController.getBlogPostId);

postRoute.put(
  '/:id',
  jwt.jwtValidate,
  validate.postPutValidate,
  jwt.authenticateToken,
  postController.putBlogPostID,
);

module.exports = postRoute;
