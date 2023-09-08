import authors from '../models/Author.js'

class AuthorController{

  static listAuthor=(req,res)=>{
      authors.find()
      .then((authors) => {
        res.status(200).json(authors);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Error while fetching authors' });
      });
  }

  static listAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, author) => {
      if(err) {
        return res.status(400).send({ message: `${err.message} - author ID not found.` });
      }
      res.status(200).send(author);
    });
  };
  
  
  static registerAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save()
        .then((savedauthor) => {
            res.status(201).send(savedauthor.toJSON());
        })
        .catch((err) => {
            res.status(500).send(`Error: ${err.message} - author registration failure`);
        }); 
  }

  static listAuthorById = async (req, res) => {
    const id = req.params.id;
    try {
      const author = await authors.findById(id);
      if (!author) {
        return res.status(404).send({ message: 'author not found.' });
      }
      res.status(200).send(author);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - author ID not found.` });
    }
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body })
      .then((authorUpdated) => {
        if (authorUpdated) {
          res.status(200).send({ message: 'author updated successfully', author: authorUpdated });
        } else {
          res.status(404).send({ message: 'author not found' });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
  static deletAuthor = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedauthor = await authors.findByIdAndDelete(id);
      if (!deletedauthor) {
        return res.status(404).send({ message: 'author not found.' });
      }
      res.status(200).send({ message: 'author removed successfully' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default AuthorController