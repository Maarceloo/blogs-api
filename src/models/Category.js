const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define(
      "Category",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        name: DataTypes.STRING,
      },
      {
        timestamps: false,
        tableName: "categories",
      }
    );
    return CategoryTable;
  };
  
  module.exports = CategorySchema;
  