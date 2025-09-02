// src/pages/EditLesson.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLessons, editLesson } from "../api/lessons"; // Only import what exists

export default function EditLesson() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const lessons = await getLessons(courseId); // Fetch all lessons for the course
        const l = lessons.find((l) => l._id === lessonId); // Pick the lesson by ID
        if (!l) {
          alert("Lesson not found");
          navigate(`/courses/${courseId}`);
          return;
        }
        setLesson(l);
        setTitle(l.title);
        setPdf(l.pdf);
        setVideo(l.video);
      } catch (err) {
        console.error("Error fetching lesson:", err);
      }
    };

    fetchLesson();
  }, [courseId, lessonId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editLesson(lessonId, { title, pdf, video });
      alert("Lesson updated successfully!");
      navigate(`/courses/${courseId}`);
    } catch (err) {
      console.error("Error updating lesson:", err);
    }
  };

  if (!lesson) return <p>Loading lesson...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Lesson</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Lesson Title"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          value={pdf}
          onChange={(e) => setPdf(e.target.value)}
          placeholder="PDF URL"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          placeholder="Video URL"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Update Lesson
        </button>
      </form>
    </div>
  );
}
