const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Coment }) {
      // define association here
      this.hasMany(Coment, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.STRING,
    pass: DataTypes.TEXT,
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
