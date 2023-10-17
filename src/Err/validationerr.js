import badRequest from "./badRequest.js";

class ValidationError extends badRequest{
  constructor(err){
    const mensagensErro = Object.values(err.errors)
      .map(err => err.message)
      .join(";");
      
    super(`The following errors were found: ${mensagensErro}`);
  }
}

export default ValidationError;