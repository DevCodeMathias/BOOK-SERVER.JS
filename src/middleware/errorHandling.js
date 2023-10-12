import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandling(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "One or more provided data is incorrect." });
  } else {
    res.status(500).send({ message: "Internal Server Error." });
  }
}

export default errorHandling;