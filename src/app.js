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

export default app;
