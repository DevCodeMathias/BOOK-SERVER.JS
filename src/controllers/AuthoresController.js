import authors from "../models/Author.js";

class AuthorController{

  static listAuthor= async (req,res)=>{ //get
    try{
      const authorsresult = await authors.find();
      res.status(200).json(authorsresult);
    }catch(err) {
      console.error(err);
      res.status(500).json({ error: "Error while fetching authors" });
    }
  };

  static registerAuthor = async (req, res) => {//post
    try {
      const author = new authors(req.body);
      const savedAuthor = await author.save();
      res.status(201).send(savedAuthor.toJSON());
    } catch (err) {
      res.status(500).send(`Error: ${err.message} - author registration failure`);
    }
  };
  
  static listAuthorById = async (req, res) => { //get by id
    const id = req.params.id;
    try {
      const author = await authors.findById(id);
      if (!author) {
        return res.status(404).send({ message: "author not found." });
      }
      res.status(200).send(author);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - author ID not found.` });
    }
  };

  static updateAuthor = async (req, res) => { //patch
    try {
      const id = req.params.id;
      const authorUpdated = await authors.findByIdAndUpdate(id, { $set: req.body });
      if (authorUpdated) {
        res.status(200).send({ message: "author updated successfully", author: authorUpdated });
      } else {
        res.status(404).send({ message: "author not found" });
      }
    } catch(err) {
      res.status(500).send({ message: err.message });
    }
  };

  static deletAuthor = async (req, res) => { //delet 
    try {
      const id = req.params.id;
      const deletedauthor = await authors.findByIdAndDelete(id);
      if (!deletedauthor) {
        return res.status(404).send({ message: "author not found." });
      }
      res.status(200).send({ message: "author removed successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default AuthorController;