const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const postUser = async ({ displayName, email, password, image }) => {
  const addInfos = { displayName, email, password, image };
  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) return { status: 409, response: { message: 'User already registered' } };
  console.log(displayName, email, password, image);
  await User.create(addInfos);
  const token = generateToken(displayName, email, image);
  return { status: 201, response: { token } };
};

module.exports = {
  postUser,
};