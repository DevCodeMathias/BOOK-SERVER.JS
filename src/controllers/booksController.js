import notFound from "../Err/notfound.js";
import { books } from "../models/index.js";

class BookController {
  // GET 
  static listBooks = async (req, res, next) => {
    try {
      const booksData = await books.find()
        .populate("author")
        .exec();

      res.status(200).json(booksData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  static byfilter = async (req, res, next) => {
    try {
      let { publisher, title } = req.query;

      const regex = new RegExp(title, "i");

      const search = {};

      if (publisher) search.publisher = publisher;
      if (title) search.title = { $regex: regex, $options: "i" };

      const result = await books.find(search);
      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  };

  // GET BY ID
  static listBookById = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      const bookResult = await books.findById(id)
        .populate("author", "name")
        .exec();
  
      if (bookResult !== null) {
        res.status(200).send(bookResult);
      } else {
        next(new notFound("Book ID not found."));
      }
    } catch (error) {
      next(error);
    }
  };

  // POST
  static registerBook = async (req, res, next) => {
    try {
      let book = new books(req.body);
      const savedBook = await book.save();

      res.status(201).send(savedBook.toJSON());
    } catch (err) {
      next(err);
    }
  };

  // PATCH
  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookUpdated = await books.findByIdAndUpdate(id, { $set: req.body }, { new: true });

      if (bookUpdated !== null) {
        res.status(200).send({ message: "Book updated successfully", book: bookUpdated });
      } else {
        next(new notFound("Book not found"));
      }
    } catch (err) {
      next(err);
    }
  };

  // DELETE
  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const deletedBook = await books.findByIdAndDelete(id);
      if (deletedBook !== null) {
        res.status(200).send({ message: "Book removed successfully" });
      } else {
        next(new notFound("Book not found."));
      }
    } catch (err) {
      next(err);
    }
  };
}

export default BookController;
