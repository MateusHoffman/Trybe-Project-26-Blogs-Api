const {
  postLoginSchema,
  postUserSchema,
  postCategoriesSchema,
  postPostSchema,
  putPostSchema,
} = require('./schema');

const validatePostLogin = async (req, res, next) => {
  const objInputPost = req.body;
  const { error } = postLoginSchema.validate(objInputPost);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  return next();
};

const validatePostUser = async (req, res, next) => {
  const objInputPost = req.body;
  const { error } = postUserSchema.validate(objInputPost);
  if (error) return res.status(400).json({ message: error.message });
  return next();
};

const validatePostCategories = async (req, res, next) => {
  const objInputPost = req.body;
  const { error } = postCategoriesSchema.validate(objInputPost);
  if (error) return res.status(400).json({ message: error.message });
  return next();
};

const validatePostPost = async (req, res, next) => {
  const objInputPost = req.body;
  const { error } = postPostSchema.validate(objInputPost);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  return next();
};

const validatePutPost = async (req, res, next) => {
  const objInput = req.body;
  const { error } = putPostSchema.validate(objInput);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  return next();
};

module.exports = {
  validatePostLogin,
  validatePostUser,
  validatePostCategories,
  validatePostPost,
  validatePutPost,
};