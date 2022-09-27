const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "posts_categories",
    }
  );

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategoryTable,
      foreignKey: "categoryId",
      // otherKey: "postId",
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: "blog_posts",
      through: PostCategoryTable,
      foreignKey: "postId",
      // otherKey: "categoryId",
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
