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

//   PostCategoryTable.associate = (models) => {
//     PostCategoryTable.belongsToMany(models.BlogPost, {
//       as: "blog_posts",
//       foreignKey: "id",
//     });
//     PostCategoryTable.belongsToMany(models.Category, {
//       as: "categories",
//       foreignKey: "id",
//     });
//   };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
