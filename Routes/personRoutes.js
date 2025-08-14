const express = require("express");
const router = express.Router();
const Person = require("../models/person");

//Post route to add a person
router.post("/", async (req, res) => {
  try {
    const personData = req.body;
    const newPerson = new Person(personData);
    const saveData = await newPerson.save();
    console.log("data saved");
    res.status(200).json(saveData);
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: "internal server error" });
  }
});

// give data to the client viya get method

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetch successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log("data not found ", err);
    res.status(500).json({ error: "internal Server Error" });
  }
});

//parameter api call
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // this line say that extract the workType from the url parameter
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetch");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work Type" });
    }
  } catch (err) {
    console.log("data not found ", err);
    res.status(500).json({ error: "internal Server Error" });
  }
});
//UPDATE OPERATION

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the Url parameter
    const UpdatedPersonData = req.body; //updated the data for the person
    const NewResponse = await Person.findByIdAndUpdate(
      personId,
      UpdatedPersonData,
      {
        new: true, // Return the  Updated document
        runValidators: true, //Run Mongoose validation
      }
    );
    if (!NewResponse) {
      return res.status(404).json({ error: "Person Not found" });
    }
    console.log("Data Updated Successfully");
    res.status(200).json(NewResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal Server Error" });
  }
});
module.exports = router;
// DELETE OPERATION
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const DeleteRES = await Person.findByIdAndDelete(personId);

    if (!DeleteRES) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Data Deleted Successfully");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
