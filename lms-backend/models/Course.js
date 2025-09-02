import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }], // key for populate
});

export default mongoose.model("Course", CourseSchema);
