const bodyValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  return next();
};

module.exports = bodyValidation;
