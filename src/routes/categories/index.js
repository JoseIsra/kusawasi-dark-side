const router = require("express").Router();
const categoryController = require("../../services/category.services");

// ROUTES SECTION
router.get("/:id", categoryController.getOne);

router.get("/", categoryController.getAll);
router.post("/new", categoryController.create);

module.exports = router;
