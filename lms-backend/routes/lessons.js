import express from "express";
import {
  getLessons,
  addLesson,
  editLesson,
  deleteLesson,
} from "../controllers/lessonController.js";

const router = express.Router();

// Get lessons for a specific course
// Use query param: /api/lessons?courseId=abc123
router.get("/", getLessons);

// Admin routes
router.post("/", addLesson);
router.put("/:id", editLesson);
router.delete("/:id", deleteLesson);

export default router;
