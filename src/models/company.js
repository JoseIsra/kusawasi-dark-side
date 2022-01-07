"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init(
    {
      ruc: DataTypes.STRING,
      bank_acount: DataTypes.STRING,
      social_business: DataTypes.STRING,
      image: DataTypes.STRING,
      owner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
