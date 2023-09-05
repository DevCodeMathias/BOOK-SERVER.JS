import express from "express";
import db from './config/dbConnect.js'
import books from './models/Books.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, "connection error"))
db.once("open", () => {
  console.log("database connection successful")
})

const app = express();
app.use(express.json());

routes(app)

app.get('/books/:id', (req, res) => {
  let index = findBook(req.params.id);
  res.json(books[index]);
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
