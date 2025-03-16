const express=require("express");
const app=express();
require("dotenv").config();
const mongoose = require('mongoose');
const Book=require("./models/books");
const User=require("./models/Users");
const bcrypt = require("bcryptjs");
const cors=require("cors");
const session = require("express-session");
const PORT=process.env.PORT || 3000
const MONGO_DB=process.env.MONGOURL
main().then(()=>{
  console.log("mongodb connect");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_DB);
}

const sessionOption={
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session(sessionOption));

app.get("/", async (req, res) => {
  try {
    const books = await Book.find({}).lean();
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const haPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      name: name,
      email: email,
      password: haPassword,
    });
    let userdetails = await createUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: userdetails._id,
        name: userdetails.name,
        email: userdetails.email,
      },
    });
    console.log(userdetails);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});






app.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    // Agar user exist nahi karta ya password match nahi hota
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Agar credentials valid hai, toh success response bhejein
    res.status(200).json({
      message: "User login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});









app.listen(PORT,()=>{
console.log(`server is running ${PORT}`);
})