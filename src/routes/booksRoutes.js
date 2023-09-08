import express from 'express'
import BookController from '../controllers/booksController.js'

const router = express.Router()

router
    .get('/books',BookController.listBooks)
    .get('/books/:id', BookController.listBookById)
    .get("/books/searh",BookController.listBooksByPublisher)
    .post('/books',BookController.registerBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id',BookController.deleteBook)

export default router 