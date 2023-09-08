import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    id:{type:String},
    title:{type:String, required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"author", required:true},
    publisher:{type:String, require:true},
    pageCount:{type:Number}
})

let books = mongoose.model('mybook',bookSchema)
export default books