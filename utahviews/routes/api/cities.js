const router = require("express").Router();
const citiesController = require("../../controllers/citiesController");

// Matches with "/api/trails"
router.route("/")
  .get(citiesController.findAll)
  .post(citiesController.create);

// Matches with "/api/trails/:id"
router
  .route("/:id")
  .get(citiesController.findById)
  .put(citiesController.update)
  .delete(citiesController.remove);

module.exports = router;
