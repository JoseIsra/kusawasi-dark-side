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
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Category.findByPk(id);
      console.log(result);
      if (!result) {
        res.status(404).json({
          message: "Category not found",
        });
        return;
      }
      res.status(200).json({
        message: "Categoría encontrada",
        result,
      });
    } catch (error) {
      console.error(error);
    }
  },
  create: async (req, res) => {
    await Category.create(req.body);
    res.json({
      message: "Creación exitosa",
      data: req.body,
    });
  },
};
