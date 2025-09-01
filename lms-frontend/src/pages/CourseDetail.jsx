// src/pages/CourseDetail.jsx
import { useParams, Link } from "react-router-dom";
import { DUMMY_COURSES } from "../data/dummyData";

export default function CourseDetail() {
  const { id } = useParams(); // e.g. "class2"
  const course = DUMMY_COURSES.find((c) => c.id === id); // <-- string match

  if (!course) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600">Course not found</h1>
        <Link
          to="/courses"
          className="mt-6 inline-block px-6 py-2 rounded-xl bg-gray-900 text-white"
        >
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {course.title}
        </h1>
        <Link
          to="/courses"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50"
        >
          ← Back
        </Link>
      </div>

      {/* Lessons */}
      <div className="grid gap-6 md:grid-cols-2">
        {course.lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{lesson.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                #{lesson.id}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={lesson.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-center hover:bg-blue-700"
              >
                📘 View E-Book
              </a>
              <a
                href={lesson.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-green-600 text-white text-center hover:bg-green-700"
              >
                🎥 Watch Video
              </a>
            </div>

            <div className="mt-3 text-sm text-gray-500">
              <Link
                to={`/quiz/${course.id}/${lesson.id}`}
                className="underline underline-offset-4"
              >
                Take Test (coming soon)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
