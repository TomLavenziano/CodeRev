const express = require("express");
const mongoose = require("mongoose");
const app = express();

const conString = "mongodb://admin:admin@ds038319.mlab.com:38319/mylearning";
app.use(express.static(__dirname));

const Chats = mongoose.model("Chats", {
    name: String,
    chat: String
});
mongoose.connect(conString, { useMongoClient: true }, (err) => {
    console.log("Database connection", err)
});

app.listen(3000, ()=>{
  console.log("well don");
});
