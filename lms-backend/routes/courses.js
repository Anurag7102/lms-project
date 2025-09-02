import express from "express";
import { getCourses, getCourseById } from "../controllers/courseController.js";

const router = express.Router();

// Routes
router.get("/", getCourses);
router.get("/:id", getCourseById); // get single course with lessons

export default router;
