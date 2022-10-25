const Joi = require('joi');

const inputEmailSchemaLogin = Joi.string().required();
const inputPasswordSchemaLogin = Joi.string().required();

const inputDisplayNameSchemaUser = Joi.string().min(8).required();
const inputEmailSchemaUser = Joi.string().email().required();
const inputPasswordSchemaUser = Joi.string().min(6).required();
const inputImageSchemaUser = Joi.string();

const postLoginSchema = Joi.object({
  email: inputEmailSchemaLogin,
  password: inputPasswordSchemaLogin,
});

const postUserSchema = Joi.object({
  displayName: inputDisplayNameSchemaUser,
  email: inputEmailSchemaUser,
  password: inputPasswordSchemaUser,
  image: inputImageSchemaUser,
});

// const putXXXSchema = Joi.object({
//   inputName: idSchema,
//   inputName: idSchema,
// });

module.exports = {
  postLoginSchema,
  postUserSchema,
};