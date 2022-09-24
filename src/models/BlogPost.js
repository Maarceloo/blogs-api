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
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "blog_post",
    }
  );

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      as: "users",
      foreignKey: "user_id",
    });
  };

  return BlogPostTable;
};

module.exports = BlogPostSchema;
