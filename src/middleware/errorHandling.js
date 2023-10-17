import mongoose from "mongoose";
import BaseError from "../Err/baseErr.js";

// eslint-disable-next-line no-unused-vars
function errorHandling(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "One or more provided data is incorrect." });
  } else if (err instanceof mongoose.Error.ValidationError) {
    const mensagensErro = Object.values(err.errors)
      .map(err => err.message)
      .join(";");
    res.status(400).send(`The following errors were found: ${mensagensErro}`);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandling;