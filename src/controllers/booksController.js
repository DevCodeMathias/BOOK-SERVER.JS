import books from '../models/Books.js'

class BookController{
  static listBooks =(req,res)=>{
      books.find()
      .then((books) => {
        res.status(200).json(books);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Error while fetching books' });
      });
  }
  
  static registerBook = (req, res) => {
    let book = new books(req.body);
    book.save()
        .then((savedBook) => {
            res.status(201).send(savedBook.toJSON());
        })
        .catch((err) => {
            res.status(500).send(`Error: ${err.message} - Book registration failure`);
        }); 
  }

  static updateBook = (req, res) => {
    const id = req.params.id;
    
    books.findByIdAndUpdate(id, { $set: req.body })
      .then((bookUpdated) => {
        if (bookUpdated) {
          res.status(200).send({ message: 'Book updated successfully', book: bookUpdated });
        } else {
          res.status(404).send({ message: 'Book not found' });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
}

export default BookController 