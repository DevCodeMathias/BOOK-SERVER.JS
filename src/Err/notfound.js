import BaseError from "./baseErr.js";

class notFound extends BaseError{
  constructor(message = "Page not found :("){
    super(message, 404);
  }
}

export default notFound;