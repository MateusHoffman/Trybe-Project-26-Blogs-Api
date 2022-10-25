module.exports = (sequelize, DataTypes) => {
	const Blog_Post = sequelize.define('Blog_Post', {
		id: { type: DataTypes.INTEGER, primaryKey:true },
		title: DataTypes.STRING(255),
		content: DataTypes.STRING(255),
		userId: { type: DataTypes.INTEGER, foreignKey:true },
		published: DataTypes.DATE,
		updated: DataTypes.DATE,
	},
	{
		tableName: 'blog_posts',
		underscored: true,
		createdAt: 'published',
		updatedAt: 'updated',
	});

	Blog_Post.associate = (models) => {
		Blog_Post.belongsTo(models.User, {
			as: "User",
			foreignKey: "userId",
		})
	}

	return Blog_Post;
}