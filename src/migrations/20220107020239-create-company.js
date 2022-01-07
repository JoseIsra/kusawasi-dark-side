"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Companies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ruc: {
        type: Sequelize.STRING,
      },
      bank_acount: {
        type: Sequelize.STRING,
      },
      social_business: {
        // razón social
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Owners",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Companies");
  },
};
