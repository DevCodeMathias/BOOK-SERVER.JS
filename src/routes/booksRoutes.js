import express from "express";
import BookController from "../controllers/booksController.js";
import paging from "../middleware/pagination.js";

const router = express.Router();

router
  .get("/books", BookController.listBooks, paging)
  .get("/books/search?", BookController.listByFilter, paging)
  .get("/books/AddFavoriteList", BookController.GetFavBooks) 
  .get("/books/:id", BookController.listBookById) 
  .post("/books", BookController.registerBook)
  .post("/books/AddFavoriteList", BookController.PostBookFavList) 
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook);

export default router;
