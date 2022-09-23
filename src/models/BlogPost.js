const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define(
    "BlogPost",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: "blog_post",
    }
  );

  BlogPostTable.associate = (models) => {
    BlogPostTable.hasMany(models.User, {
      as: "users",
      foreignKey: "id",
    });
  };

  return BlogPostTable;
};

module.exports = BlogPostSchema;
