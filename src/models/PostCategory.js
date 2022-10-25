module.exports = (sequelize, DataTypes) => {
	const Post_Category = sequelize.define('Post_Category',
		{},
		{
			tableName: 'posts_categories',
			timestamps: false,
			underscored: true,
		}
	);

	Post_Category.associate = (models) => {
		models.Category.belongsToMany(models.Blog_Post, {
			through: Post_Category,
			as: "Blog_Post",
			foreignKey: "categoryId",
			otherKey: "postId",
		})

		models.Blog_Post.belongsToMany(models.Category, {
			through: Post_Category,
			as: "Category",
			foreignKey: "postId",
			otherKey: "categoryId",
		})
	}

	return Post_Category;
}