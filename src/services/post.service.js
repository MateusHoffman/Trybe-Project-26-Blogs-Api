const { Category, BlogPost, User, PostCategory } = require('../models');
const { authenticateToken } = require('../utils/JWT');

const postPost = async ({ title, content, categoryIds }, { authorization }) => {
  const allCategories = await Category.findAll();
  const allCategoriesId = allCategories.map(({ id }) => id);
  const categoryExist = categoryIds.every((id) => allCategoriesId.includes(id));
  if (!categoryExist) {
    return { status: 400, response: { message: 'one or more "categoryIds" not found' } };
  }

  const { objUser: { name, email } } = authenticateToken(authorization);
  const { id } = await User.findOne(
    { where: { displayName: name, email }, attributes: ['id'] },
  );

  const postObj = await BlogPost.create({ title, content, categoryIds, userId: id });

  await Promise.all(categoryIds.map((category) => 
    PostCategory.create({ postId: postObj.id, categoryId: category })));

  return { status: 201, response: postObj };
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
  postPost,
  // getAllUser,
  // getOneUser,
};