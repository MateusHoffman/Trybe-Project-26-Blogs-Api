const { User } = require('../models');
const { generateToken, authenticateToken } = require('../utils/JWT');

const postUser = async ({ displayName, email, password, image }) => {
  const addInfos = { displayName, email, password, image };
  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) return { status: 409, response: { message: 'User already registered' } };
  await User.create(addInfos);
  const token = generateToken(displayName, email, image);
  return { status: 201, response: { token } };
};

const getAllUser = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
  return { status: 200, response: allUsers };
};

const getOneUser = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  if (!user) return { status: 404, response: { message: 'User does not exist' } };
  return { status: 200, response: user };
};

const deleteOneUser = async (token) => {
  console.log(token);
  const { objUser: { name, email } } = authenticateToken(token);
  const { id } = await User.findOne(
    { where: { displayName: name, email }, attributes: ['id'] },
  );
  console.log(id);
  await User.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  postUser,
  getAllUser,
  getOneUser,
  deleteOneUser,
};