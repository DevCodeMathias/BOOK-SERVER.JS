import books from "../models/Books.js";


class BookController{
//GET 
  static listBooks = async(req, res,next) => {
    try {
      const booksData = await books.find().populate("author").exec();
      res.status(200).json(booksData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  
  //GET BY ID
  static listBookById = async(req, res, next) => {
    try {
      const id = req.params.id;
      const book = await books.findById(id);
  
      if (!book) {
        return res.status(400).send({ message: `The book with ID ${id} was not found.` });
      }
  
      res.status(200).send(book);
    } catch (err) { 
      next(err);
    }
  };
  
  //POST
  static registerBook = (req, res, next) => {
    let book = new books(req.body);
    book.save()
      .then((savedBook) => {
        res.status(201).send(savedBook.toJSON());
      })
      .catch((err) => {
        next(err);
      }); 
  };

  //PATCH
  static updateBook = (req, res, next) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body })
      .then((bookUpdated) => {
        if (bookUpdated) {
          res.status(200).send({ message: "Book updated successfully", book: bookUpdated });
        } else {
          res.status(404).send({ message: "Book not found" });
        }
      })
      .catch((err) => {
        next(err);
      });
  };

  //DELETET
  static deleteBook = async (req, res, next ) => {
    const id = req.params.id;
  
    try {
      const deletedBook = await books.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).send({ message: "Book not found." });
      }
      res.status(200).send({ message: "Book removed successfully" });
    } catch (err) {
      next(err); 
    }
  };
}

export default BookController; 


