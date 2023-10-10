import books from "../models/Books.js";

class BookController{
//GET 
  static listBooks = async(req, res) => {
    try {
      const booksData = await books.find().populate("author ").exec();
      res.status(200).json(booksData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar os livros" });
    }
  };
  
  //GET BY ID
  static listBookById = async(req, res) => {
    try {
      const id = req.params.id;
      const book = await books.findById(id);
  
      if (!book) {
        return res.status(400).send({ message: `Livro com o ID ${id} não encontrado.` });
      }
  
      res.status(200).send(book);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Erro ao buscar o livro" });
    }
  };
  
  //POST
  static registerBook = (req, res) => {
    let book = new books(req.body);
    book.save()
      .then((savedBook) => {
        res.status(201).send(savedBook.toJSON());
      })
      .catch((err) => {
        res.status(500).send(`Error: ${err.message} - Book registration failure`);
      }); 
  };

  //PATCH
  static updateBook = (req, res) => {
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
        res.status(500).send({ message: err.message });
      });
  };

  //DELETET
  static deleteBook = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedBook = await books.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).send({ message: "Book not found." });
      }
      res.status(200).send({ message: "Book removed successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default BookController; 


