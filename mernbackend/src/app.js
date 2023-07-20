//type nul > app.js
//const static_path = path.join(__dirname,"../public")
//app.use(express.static(static_path))
const mongoose = require('mongoose');




const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const dotenv = require("dotenv");

require("./db/conn");

dotenv.config({ path: "./config.env" });

app.use(express.urlencoded({ extended: true }));

const DB=process.env.LOCAL_DATABASE;

mongoose.connect(DB,{

 useNewUrlParser: true,
 
  useUnifiedTopology: true
  
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.log(err);
})

const static_path = path.join(__dirname, "../public");
const templete_path = path.join(__dirname, "../templetes/views");

const partials_path = path.join(__dirname, "../templets/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templete_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("The server is started on port 3000");
});
