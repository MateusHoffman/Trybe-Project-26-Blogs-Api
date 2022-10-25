const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const postLogin = async ({ email, password }) => {
  const objPost = await User.findOne({ where: { email, password } });
  if (!objPost) return { status: 400, response: { message: 'Invalid fields' } };
  const token = generateToken(objPost.displayName, objPost.email);
  return { status: 200, response: { token } };
};

module.exports = {
  postLogin,
};