import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id:{type: String},
    name:{
      type: String, 
      required: [true, " the name of the author is required"]
    },
    nationality:{type: String}
  },
  {
    versionKey: false
  }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;