// src/pages/AddLesson.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addLesson } from "../api/lessons";

export default function AddLesson() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState({
    title: "",
    pdf: "",
    video: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLesson({ ...lesson, courseId });
      alert("Lesson added successfully!");
      navigate(`/courses/${courseId}`);
    } catch (err) {
      console.error(err);
      setError("Failed to add lesson.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Add New Lesson</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={lesson.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">PDF Link</label>
          <input
            type="text"
            name="pdf"
            value={lesson.pdf}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Video Link</label>
          <input
            type="text"
            name="video"
            value={lesson.video}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Add Lesson
        </button>
      </form>
    </div>
  );
}
