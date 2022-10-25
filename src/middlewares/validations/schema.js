const Joi = require('joi');

const inputEmailSchema = Joi.string().required();
const inputPasswordSchema = Joi.string().required();

const postLoginSchema = Joi.object({
  email: inputEmailSchema,
  password: inputPasswordSchema,
});

// const putXXXSchema = Joi.object({
//   inputName: idSchema,
//   inputName: idSchema,
// });

module.exports = {
  postLoginSchema,
  // putXXXSchema,
};