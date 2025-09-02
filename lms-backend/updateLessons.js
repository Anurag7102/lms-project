import mongoose from "mongoose";
import Lesson from "./models/Lesson.js"; // adjust path if needed

const MONGO_URI = "mongodb://localhost:27017/lms"; // your DB URI

const fixLessons = async () => {
  await mongoose.connect(MONGO_URI);
  const lessons = await Lesson.find();

  for (let lesson of lessons) {
    if (typeof lesson.courseId === "string") {
      lesson.courseId = mongoose.Types.ObjectId(lesson.courseId);
      await lesson.save();
      console.log(`Updated lesson ${lesson._id}`);
    }
  }

  console.log("All lessons fixed!");
  mongoose.disconnect();
};

fixLessons();
