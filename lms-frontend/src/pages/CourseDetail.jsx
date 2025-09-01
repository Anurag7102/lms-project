// src/pages/CourseDetail.jsx
import { useParams } from "react-router-dom";
import { useCourseContext } from "../context/CourseContext";

export default function CourseDetail() {
  const { id } = useParams();
  const { courses } = useCourseContext();

  const course = courses.find((c) => c.id === id);
  if (!course)
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">Course not found.</div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {course.lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2">{lesson.title}</h3>

            {/* E-Book Button */}
            <a
              href={lesson.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white rounded mb-2 block bg-blue-500 hover:bg-blue-600 text-center"
            >
              View E-Book
            </a>

            {/* Video Button */}
            <a
              href={lesson.video}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white rounded block bg-green-500 hover:bg-green-600 text-center"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
