const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
        id: DataTypes.INTEGER,
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        tableName: 'users'
    });
    return UserTable;
}

module.exports = UserSchema;