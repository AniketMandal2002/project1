//type nul > app.js
//const static_path = path.join(__dirname,"../public")
//app.use(express.static(static_path))

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const dotenv = require("dotenv");

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
app.listen(3000, () => {
  console.log("The server is started on port 3000");
});
