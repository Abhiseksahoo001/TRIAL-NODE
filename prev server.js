// const express = require("express");
// const app = express();
// const db = require("./db"); // Import the database connection
// //const Person = require("./models/person");
// // const MenuItem = require("./models/menu");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); // store the data in request body

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // app.post("/person", async (req, res) => {
// //   try {
// //     const personData = req.body;
// //     const newPerson = new Person(personData);
// //     const saveData = await newPerson.save();
// //     console.log("data saved");
// //     res.status(200).json(saveData);
// //   } catch (err) {
// //     console.log(err);
// //     res.status(200).json({ error: "internal server error" });
// //   }
// // });

// // give data to the client viya get method

// // app.get("/person", async (req, res) => {
// //   try {
// //     const data = await Person.find();
// //     console.log("data fetch successfully");
// //     res.status(200).json(data);
// //   } catch (err) {
// //     console.log("data not found ", err);
// //     res.status(500).json({ error: "internal Server Error" });
// //   }
// // });

// // //MENU CARD POST METHOD
// // app.post("/menu", async (req, res) => {
// //   try {
// //     const MenuDetail = req.body;
// //     const Menulist = new MenuItem(MenuDetail);
// //     const MenuData = await Menulist.save();
// //     console.log("data saved");
// //     res.status(200).json(MenuData);
// //   } catch (err) {
// //     console.log(err);
// //     res.status(200).json({ error: "internal server error" });
// //   }
// // });

// // //MENU CARD GET METHOD
// // app.get("/menu", async (req, res) => {
// //   try {
// //     const MenuData = await MenuItem.find();
// //     console.log("data fetch successfully");
// //     res.status(200).json(MenuData);
// //   } catch (err) {
// //     console.log("data not found ", err);
// //     res.status(500).json({ error: "internal Server Error" });
// //   }
// // });

// // //parameter api call
// // app.get("/person/:workType", async (req, res) => {
// //   try {
// //     const workType = req.params.workType; // this line say that extract the workType from the url parameter
// //     if (workType == "chef" || workType == "manager" || workType == "waiter") {
// //       const response = await Person.find({ work: workType });
// //       console.log("response fetch");
// //       res.status(200).json(response);
// //     } else {
// //       res.status(404).json({ error: "invalid work Type" });
// //     }
// //   } catch (err) {
// //     console.log("data not found ", err);
// //     res.status(500).json({ error: "internal Server Error" });
// //   }
// // });

// //Person DETAIL

// const personRoutes = require("./Routes/personRoutes");
// app.use("/person", personRoutes);

// //MENU DETAIL
// const menuRouter = require("./Routes/menuRoutes");
// app.use("/menu", menuRouter);

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });
