// models invoke
const { Category } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const fields = await Category.findAll();
      if (!fields.length) {
        res.status(404).json({
          message: "Aún no hay campos para mostrar 👻",
        });
        return;
      }
      res.json(fields);
    } catch (error) {
      console.log(error);
    }
  },
  getOne: (req, res) => {},
  create: (req, res) => {},
};
