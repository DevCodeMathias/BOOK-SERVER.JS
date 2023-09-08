# Book and Author Management Application📚

This is a sample project for a book and author management application using Node.js, Express.js, and MongoDB. It implements a basic CRUD (Create, Read, Update, Delete) API for managing books and authors

## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. Follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running the command: `npm install`
4. Start the server with: `node server.js`
## Features

### Listing Books and Authors:

- **Books:** [http://localhost:3000/books](http://localhost:3000/books)
- **Authors:** [http://localhost:3000/authors](http://localhost:3000/authors)

### Adding a Book:

Send a POST request to [http://localhost:3000/books](http://localhost:3000/books) with the book details in JSON.

### Adding an Author:

Send a POST request to [http://localhost:3000/authors](http://localhost:3000/authors) with the author details in JSON.

### Updating a Book:

Send a PUT request to [http://localhost:3000/books/:id](http://localhost:3000/books/:id) with the updated book details.

### Updating an Author:

Send a PUT request to [http://localhost:3000/authors/:id](http://localhost:3000/authors/:id) with the updated author details.

### Deleting a Book:

Send a DELETE request to [http://localhost:3000/books/:id](http://localhost:3000/books/:id).

### Deleting an Author:

Send a DELETE request to [http://localhost:3000/authors/:id](http://localhost:3000/authors/:id).

## Project Structure

- `routes.js`: Contains the route definitions and their respective controllers.
- `booksController.js`: Control logic for book operations.
- `authorsController.js`: Control logic for author operations.
- `books.js`: Model and schema for books.
- `author.js`: Model and schema for authors.
- `DbConnect.js`: MongoDB connection configuration.

## Testing with Postman

You can use [Postman](https://www.postman.com/) to test the API endpoints. Import the provided Postman collection for easy testing.


## Contribution

Feel free to open issues or send pull requests for improvements.

## License

This project is licensed under the MIT License.
