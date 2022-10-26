// const { Category } = require('../models');
// const { generateToken } = require('../utils/JWT');

const postCategories = async ({ name }) => {
  const addInfos = { name };
  // await Category.create(addInfos);
  // const findNewCategory = await Category.findOne({ where: { name } });
  return { status: 201, response: addInfos };
};

// const getAllUser = async () => {
//   const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
//   return { status: 200, response: allUsers };
// };

// const getOneUser = async (id) => {
//   const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
//   if (!user) return { status: 404, response: { message: 'User does not exist' } };
//   return { status: 200, response: user };
// };

module.exports = {
  postCategories,
  // getAllUser,
  // getOneUser,
};