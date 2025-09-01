// src/components/Card.jsx
import { Link } from "react-router-dom";

export default function Card({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {course.lessons.length} Lesson
        </p>
        <Link
          to={`/courses/${course.id}`}
          className="text-blue-600 font-medium hover:underline"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
