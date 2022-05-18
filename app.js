const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");

// const bodyParser = require("body-parser");
const date=require(__dirname +"/date.js");
// console.log(date);

const app = express();

// mongoose.connect("mongodb://localhost:27017/todolistDB");

// const itemsSchema = new mongoose.Schema({
//   name: String
// });

// const Item= mongoose.model("Item",itemsSchema);

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function (req, res) {
  // res.send("hello");
  // let today = new Date();

  // let options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  // };

  // var currentDay = today.getDay();
  // let day = today.toLocaleDateString("en-US", options);

  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  // console.log(req.body);
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function(req,res){
  res.render("about"); 
})

// app.post("/work",function(req,res){
//   console.log(req.body.list)
//   let item =req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// module.exports=app;

// if (currentDay === 6 || currentDay === 0){
//   day="Weekend";
// }else{
//   day="Weekday";
// }
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;

//   default:
//     console.log("Error: Current day is equal to:" + currentDay);
//     break;
// }
