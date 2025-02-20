const express=require("express");
const app=express();
require("dotenv").config();
const mongoose = require('mongoose');
const Book=require("./models/books");
const cors=require("cors");
const PORT=process.env.PORT || 3000
const MONGO_DB=process.env.MONGOURL
main().then(()=>{
  console.log("mongodb connect");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_DB);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", async (req, res) => {
  try {
    const books = await Book.find({}).lean();
    console.log(books);
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT,()=>{
console.log(`server is running ${PORT}`);
})