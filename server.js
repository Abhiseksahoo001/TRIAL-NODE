const express = require("express");
const app = express();
const db = require("./db"); // Import the database connection

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // store the data in request body

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Person DETAIL

const personRoutes = require("./Routes/personRoutes");
app.use("/person", personRoutes);

//MENU DETAIL
const menuRouter = require("./Routes/menuRoutes");
app.use("/menu", menuRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
