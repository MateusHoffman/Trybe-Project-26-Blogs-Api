module.exports = (sequelize, DataTypes) => {
	const BlogPost = sequelize.define('BlogPost', {
		id: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true, allowNull: false },
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

	BlogPost.associate = (models) => {
		BlogPost.belongsTo(models.User, {
			as: "user",
			foreignKey: "userId",
		})
	}

	return BlogPost;
}