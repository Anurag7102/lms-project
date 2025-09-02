import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import lessonsRoutes from "./routes/lessons.js";
import coursesRoutes from "./routes/courses.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // allow requests from frontend

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/lessons", lessonsRoutes);
app.use("/api/courses", coursesRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
