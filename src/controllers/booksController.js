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
}

export default BookController