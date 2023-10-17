import mongoose from "mongoose";
import BaseError from "../Err/baseErr.js";
import badRequest from "../Err/badRequest.js";
import ValidationError from "../Err/validationerr.js";
import notFound from "../Err/notfound.js";

// eslint-disable-next-line no-unused-vars
function errorHandling(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new badRequest().sendResponse(res);

  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);

  }else if(err instanceof notFound){
    err.sendResponse(res);
  }else{
    new BaseError().sendResponse(res);
  }
}

export default errorHandling; 