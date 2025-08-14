const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu");

//MENU CARD POST METHOD
router.post("/", async (req, res) => {
  try {
    const MenuDetail = req.body;
    const Menulist = new MenuItem(MenuDetail);
    const MenuData = await Menulist.save();
    console.log("data saved");
    res.status(200).json(MenuData);
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: "internal server error" });
  }
});

//MENU CARD GET METHOD
router.get("/", async (req, res) => {
  try {
    const MenuData = await MenuItem.find();
    console.log("data fetch successfully");
    res.status(200).json(MenuData);
  } catch (err) {
    console.log("data not found ", err);
    res.status(500).json({ error: "internal Server Error" });
  }
});

module.exports = router;
