const mongoose = require("mongoose");
// Adding properties to course schema.
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: [],
  zipCode: {
    type: Number,
    min: [10000, "Zip code too short"],
    max: 99999,
  },
});

module.exports = mongoose.model("Course", courseSchema);