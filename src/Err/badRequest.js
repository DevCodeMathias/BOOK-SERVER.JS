import BaseError from "./baseErr.js";

class badRequest extends BaseError{
  constructor(){
    super("One or more provided data is incorrect",400);  
  }
    

}

export default badRequest;