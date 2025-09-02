import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: { type: String, required: true },
    pdf: { type: String },
    video: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);
