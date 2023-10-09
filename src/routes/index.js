import express from "express";
import books from "./booksRoutes.js";
import author from "./authorsRoutes.js";

const routes = (app) =>{
  app.route("/").get((req,res)=>{
    res.status(200).send("WELCOME TO THE API BOOKS");
  });
  app.use(
    express.json(),
    books,
    author
  );
};

export default routes;