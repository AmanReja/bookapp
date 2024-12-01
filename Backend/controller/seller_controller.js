const express = require("express");

const router = express.Router();

const BookSchema = require("../model/BookSchema");

//create our web services / API
//Post Method
router.post("/addBook", async (req, res) => {
  const data = new BookSchema({
    bookid: req.body.bookid,
    bookname: req.body.bookname,
    price: req.body.price,
    quantity: req.body.quantity,
    authore: req.body.authore,
    bookimage: req.body.bookimage
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAllBooks", async (req, res) => {
  try {
    const data = await BookSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getBook/:id", async (req, res) => {
  try {
    const data = await BookSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/updateBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await BookSchema.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BookSchema.findByIdAndDelete(id);
    res.send(`Document with ${data.bookname} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
