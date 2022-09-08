const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Coment }) {
      // define association here
      this.hasMany(Coment, { foreignKey: 'tea_id' });
    }
  }
  Tea.init({
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    img: DataTypes.TEXT,
    info: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
