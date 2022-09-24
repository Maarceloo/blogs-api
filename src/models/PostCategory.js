const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    "PostCategory",
    {
      post_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: "post_categories",
    }
  );

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategoryTable,
      foreignKey: "category_id",
      otherKey: "post_id",
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: "blog_post",
      through: PostCategoryTable,
      foreignKey: "post_id",
      otherKey: "category_id",
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
