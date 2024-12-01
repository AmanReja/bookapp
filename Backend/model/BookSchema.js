const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  bookid: {
    required: true,
    type: Number
  },
  bookname: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  quantity: {
    required: true,
    type: Number
  },
  authore: {
    required: true,
    type: String
  },
  bookimage: {
    required: false,
    type: String
  }
});

module.exports = mongoose.model("Book", dataSchema);
