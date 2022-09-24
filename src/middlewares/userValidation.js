const schemas = require('./schemas');

const userValidation = async (req, res, next) => {
  const validation = schemas.userSchema.validate(req.body);
  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }
  return next();
};

module.exports = {
  userValidation,
};
