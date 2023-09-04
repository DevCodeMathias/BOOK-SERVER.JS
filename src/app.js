import express from "express";
import db from './config/dbConnect.js'
import books from './models/Books.js'

db.on("error", console.log.bind(console, "connection error"))
db.once("open", () => {
  console.log("database connection successful")
})

const app = express();

app.use(express.json());

//const books = [
 // { id: 1, title: "The Lord of the Rings" },
  //{ id: 2, title: "The Hobbit" }
//];

app.get('/', (req, res) => {
  res.status(200).send('WELCOME TO THE API BOOK');
});

//test
app.get('/books', (req, res) => {
  books.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error while fetching books' });
    });
});

app.get('/books/:id', (req, res) => {
  let index = findBook(req.params.id);
  res.json(books[index]);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Book has been successfully registered');
});

app.put('/books/:id', (req, res) => {
  let index = findBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.delete('/books/:id', (req, res) => {
  let { id } = req.params;
  let index = findBook(id);
  books.splice(index, 1);
  res.send(`Book ${id} successfully removed`);
});

function findBook(id) {
  return books.findIndex(book => book.id == id);
}

export default app;
