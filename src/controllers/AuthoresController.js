import notFound from "../Err/notfound.js";
import authors from "../models/Author.js";


class AuthorController{

  static listAuthor= async (req,res,next)=>{ //get
    try{
      const authorsresult = await authors.find();
      res.status(200).json(authorsresult);
    }catch(err) {
      console.error(err);
      next(err);
    }
  };

  static registerAuthor = async (req, res,next) => {//post
    try {
      const author = new authors(req.body);
      const savedAuthor = await author.save();
      res.status(201).send(savedAuthor.toJSON());
    } catch (err) {
      next(err);
    }
  };
 
  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await authors.findById(id);

      if (authorResult !== null) {
        res.status(200).send(authorResult);
      } else {
        next(new notFound("ID author not found"));
      }
    } catch (err) {
      next(err);
    }
  };

  static updateAuthor = async (req, res,next) => { //patch
    try {
      const id = req.params.id;
      const authorUpdated = await authors.findByIdAndUpdate(id, { $set: req.body });
      
      res.status(200).send({ message: "author updated successfully", author: authorUpdated });
    } catch(err) {
      next(err);
    }
  };

  static deletAuthor = async (req, res, next) => { //delet 
    try {
      const id = req.params.id;
      const deletedauthor = await authors.findByIdAndDelete(id);
      if (!deletedauthor) {
        return res.status(404).send({ message: "author not found." });
      }
      res.status(200).send({ message: "author removed successfully" });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthorController;