import { Link } from "react-router-dom";

export default function Card({ course }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      {/* Course Image */}
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 object-cover mb-4 rounded"
      />

      {/* Course Title */}
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

      {/* Course Description */}
      <p className="text-gray-600 mb-4">{course.description}</p>

      {/* Link to Course Details */}
      <Link
        to={`/courses/${course.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Course
      </Link>
    </div>
  );
}
