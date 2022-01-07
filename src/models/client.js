"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password_real: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      user_type: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
