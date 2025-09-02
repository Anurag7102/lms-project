const express = require("express");
const Progress = require("../models/Progress");

const router = express.Router();

// Get user progress for a course
router.get("/:userId/:courseId", async (req, res) => {
  const { userId, courseId } = req.params;
  try {
    const progress = await Progress.findOne({ userId, courseId });
    res.json(progress || { userId, courseId, completedLessons: [] });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update progress (mark lesson as completed)
router.post("/", async (req, res) => {
  const { userId, courseId, lessonId } = req.body;
  try {
    let progress = await Progress.findOne({ userId, courseId });
    if (!progress) {
      progress = new Progress({
        userId,
        courseId,
        completedLessons: [lessonId],
      });
    } else {
      if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
      }
    }
    await progress.save();
    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
