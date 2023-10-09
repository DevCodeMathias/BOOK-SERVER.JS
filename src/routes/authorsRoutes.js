import express from "express";
import AuthorController from "../controllers/AuthoresController.js";

const router = express.Router();

router
  .get("/author",AuthorController.listAuthor)
  .get("/author/:id", AuthorController.listAuthorById)
  .post("/author",AuthorController.registerAuthor)
  .put("/author/:id", AuthorController.updateAuthor )
  .delete("/author/:id",AuthorController.deletAuthor);

export default router; 