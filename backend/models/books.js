const mongoose=require("mongoose");
const bookSchema=mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   title:{
    type:String,
    maxLength:50,
   },
   price:Number,
   category:String,
   image:String,
})
const Book=new mongoose.model("Book",bookSchema);
module.exports=Book;