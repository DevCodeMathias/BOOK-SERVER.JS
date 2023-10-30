import mongoose from "mongoose";
//databse schema config
const bookSchema = new mongoose.Schema({
  
  id: { type: String },
  title:{ 
    type: String, 
    required: [true, "The tittle is required" ]
  },
  author:{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "authors", 
    required: [true,"The author is required" ]
  },
  publisher:{ 
    type: String, 
    required: [true, "The publisher is required"]
  },
  pageCount: { 
    type: Number,
    validate:{
      validator: (value) =>{
        return value >= 10 && value <= 5000;
      },
      message:"The nomber of pager must be between 10 and 5000 "
    } 
  }
}
);

let books = mongoose.model("mybook",bookSchema);
export default books;
