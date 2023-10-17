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
This project follows the MVC (Model-View-Controller), which helps in organizing the codebase into separate components. Here's a brief overview of the project's structure:

```bash
project-root-directory
├── src
│   ├── app.js
│   ├── config 
│   │   └── dbConfig.js
│   ├── controllers
│   │   ├── AuthoresController.js
│   │   └── booksController.js
│   ├── middleware
│   │   ├── errorHandling.js
│   │   └── Handler404.js
│   ├── models
│   │   ├── Author.js
│   │   └── Books.js
│   └── routes
│       ├── index.js
│       ├── booksRoutes.js
│       └──authorsRoutes.js
├── package.json
├── .eslintrc.json
├── Server.js
└── README.md
```

## JSON Format

This API uses JSON (JavaScript Object Notation) for data exchange. When interacting with the API, ensure that your requests and responses are formatted in JSON. Below are examples of the JSON structures for books and authors:

### Book JSON Structure:

```json
[
    {
        "_id": "64fa88ef1c468255e84dce64",
        "title": "To Kill a Mockingbird",
        "author": {
            "_id": "64fa88a81c468255e84dce61",
            "name": "Harper Lee"
        },
        "publisher": "J.B. Lippincott & Co.",
        "pageCount": 281,
    }
]
```

## Testing with Postman

You can use [Postman](https://www.postman.com/) to test the API endpoints. Import the provided Postman collection for easy testing.


## Contribution

Feel free to open issues or send pull requests for improvements.

## License

This project is licensed under the MIT License.
