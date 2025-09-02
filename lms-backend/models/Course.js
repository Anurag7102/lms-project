const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  language: String,
  video: String,
  audio: String,
  pdf: String,
});

module.exports = mongoose.model("Course", courseSchema);
