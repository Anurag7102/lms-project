import Lesson from "../models/Lesson.js";

// GET lessons for a specific course
export const getLessons = async (req, res) => {
  const courseId = req.query.courseId; // get courseId from query
  if (!courseId)
    return res.status(400).json({ message: "courseId is required" });

  try {
    const lessons = await Lesson.find({ courseId });
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin: add, edit, delete (same as before)
export const addLesson = async (req, res) => {
  const lesson = new Lesson(req.body);
  try {
    const saved = await lesson.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editLesson = async (req, res) => {
  try {
    const updated = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: "Lesson deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
