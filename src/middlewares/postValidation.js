const schemas = require('./schemas');
const { Category } = require('../models');

const postValidate = async (req, res, next) => {
  const { categoryIds } = req.body;

  const validation = schemas.postSchema.validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  const result = await Promise.all(
    categoryIds.map(async (value) => {
      const resultado = await Category.findByPk(value);
      if (resultado) return value;
    }),
  );

  const resposta = result.filter((iten) => iten !== undefined);

  if (!resposta.length) { return res.status(400).json({ message: '"categoryIds" not found' }); }

  req.body.categoryIds = resposta;
  return next();
};

const postPutValidate = async (req, res, next) => {
  const { title, content } = req.body;

  if (title === '' || content === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};

module.exports = {
  postValidate,
  postPutValidate,
};
