const express = require("express");
const contactController = require("../services/contact/ctrl");

const router = express.Router();

router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "RESTHub OK"
  });
});

// Contact routes
router
  .route("/contacts")
  .get(contactController.getAll)
  .post(contactController.create);

router
  .route("/contacts/:id")
  .get(contactController.getById)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
