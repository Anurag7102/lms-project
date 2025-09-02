// src/components/Card.jsx
import { Link } from "react-router-dom";

export default function Card({ course }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm hover:shadow-md overflow-hidden transition">
      {/* Course Thumbnail */}
      {course.image && (
        <img
          src={course.image} // backend-provided image URL
          alt={course.title}
          className="w-full h-40 object-cover"
        />
      )}

      {/* Course Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        {course.description && (
          <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        )}

        <Link
          to={`/courses/${course._id}`}
          className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          Browse
        </Link>
      </div>
    </div>
  );
}
