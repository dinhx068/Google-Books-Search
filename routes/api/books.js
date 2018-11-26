const router = require("express").Router();
const booksController = require("../../controllers/booksController");

const key = "AIzaSyAmZKWd2XntPI5H01uqWo-UeFLM4JEX0V0";

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
