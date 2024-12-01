const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  userid: {
    required: true,
    type: String
  },

  password: {
    required: true,
    type: String
  },
  contact: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("User", dataSchema);
