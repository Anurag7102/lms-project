import mongoose from "mongoose";

// ------------------- Schemas -------------------
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
});

const lessonSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  title: String,
  pdf: String,
  video: String,
});

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  completed: { type: Boolean, default: false },
});

// ------------------- Models -------------------
const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);
const Lesson = mongoose.model("Lesson", lessonSchema);
const Progress = mongoose.model("Progress", progressSchema);

// ------------------- Connect -------------------
const uri = "mongodb://127.0.0.1:27017/lms"; // Use 127.0.0.1
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ------------------- Seed Data -------------------
async function seedDB() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Lesson.deleteMany({});
    await Progress.deleteMany({});

    console.log("Existing data cleared.");

    // Sample courses
    const coursesData = [];
    for (let i = 1; i <= 10; i++) {
      coursesData.push({
        title: `Class ${i}`,
        description: `This is the description for Class ${i}`,
        image: `/assets/thumbnails/img${i}.jpg`,
      });
    }

    const courses = await Course.insertMany(coursesData);

    // Create lessons for each course
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const lesson = await Lesson.create({
        courseId: course._id,
        title: `Lesson ${i + 1}`,
        pdf: `/assets/pdfs/SM${i + 1}.pdf`,
        video: `/assets/videos/SM${i + 1}.mp4`,
      });

      // Link lesson to course
      course.lessons.push(lesson._id);
      await course.save();
    }

    console.log("Courses and lessons seeded successfully.");

    mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } catch (err) {
    console.error("Seeding error:", err);
  }
}

// Run seed
seedDB();
