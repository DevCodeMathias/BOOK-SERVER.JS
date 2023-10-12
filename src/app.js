
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandling from "./middleware/errorHandling.js";

//db config 
db.on("error", console.log.bind(console, "connection error"));
db.once("open", () => {
  console.log("database connection successful");
});

//config express
const app = express();
app.use(express.json());
routes(app);

//mid
app.use(errorHandling);


export default app;
