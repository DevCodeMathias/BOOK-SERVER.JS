# Book and Author Management Application📚

This is a sample project for a book and author management application using Node.js, Express.js, and MongoDB. It implements a basic CRUD (Create, Read, Update, Delete) API for managing books and authors

## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. Follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running the command: `npm install`
4. Start the server with: `node server.js`
## Features

| Action                     | Endpoint                                           | Description                                           |
|----------------------------|----------------------------------------------------|-------------------------------------------------------|
| List Books                 | [http://localhost:3000/books](http://localhost:3000/books)           | Endpoint to list all books                            |
| List Authors               | [http://localhost:3000/authors](http://localhost:3000/authors)       | Endpoint to list all authors                          |
| Add Book                   | [http://localhost:3000/books](http://localhost:3000/books)           | Send a POST request with book details in JSON         |
| Add Author                 | [http://localhost:3000/authors](http://localhost:3000/authors)       | Send a POST request with author details in JSON       |
| Update Book                | [http://localhost:3000/books/:id](http://localhost:3000/books/:id)   | Send a PUT request with updated book details          |
| Update Author              | [http://localhost:3000/authors/:id](http://localhost:3000/authors/:id) | Send a PUT request with updated author details        |
| Delete Book                | [http://localhost:3000/books/:id](http://localhost:3000/books/:id)   | Send a DELETE request to delete a book               |
| Delete Author              | [http://localhost:3000/authors/:id](http://localhost:3000/authors/:id) | Send a DELETE request to delete an author            |
| Search and Filtering Books | [http://localhost:3000/books/search](http://localhost:3000/books/search? (the req )) | Send a GET request to search and filter books       |
| Add book to favorite List       | [http://localhost:3000/books/AddFavoriteList](http://localhost:3000/books/AddFavoriteList) | Send a PUSH  to favorit List 
| Get Favorite              | [http://localhost:3000//books/AddFavoriteList](http://localhost:3000/books/AddFavoriteList) | Endpoint to list favotire List             |


## Project Structure
This project follows the MVC (Model-View-Controller), which helps in organizing the codebase into separate components. Here's a brief overview of the project's structure:

```bash
project-root-directory
├── src
│   ├── app.js
│   ├── config 
│   │   └── dbConfig.js
│   ├── Err
│   │   ├──badRequest.js
│   │   ├──baseErr.js
│   │   ├── notfound.js
│   │   └──validationerr.js
│   ├── controllers
│   │   ├── AuthoresController.js
│   │   └── booksController.js
│   ├── middleware
│   │   ├── errorHandling.js
│   │   ├── Handler404.js
│       └── pagination.js
│   ├── models
│   │   ├── Author.js
│   │   ├── Books.js
│   │   ├──globalValidation.js
│   │    └──index.js
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

## .env File Configuration
⚠️ Important: This project requires the setup of a .env file to manage sensitive environment variables, such as the MongoDB database connection string. We recommend users to configure this file with their own data.

## Contribution

Feel free to open issues or send pull requests for improvements.

## License

This project is licensed under the MIT License.
