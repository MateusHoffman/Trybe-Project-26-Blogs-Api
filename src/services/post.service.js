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

const getAllPost = async () => {
  const allPost = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  return { status: 200, response: allPost };
};

const getOnePost = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  if (!post) return { status: 404, response: { message: 'Post does not exist' } };
  return { status: 200, response: post };
};

module.exports = {
  postPost,
  getAllPost,
  getOnePost,
};