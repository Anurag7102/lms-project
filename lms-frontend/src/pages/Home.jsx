// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800 px-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to <span className="text-indigo-600">LMS Project</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Learn smarter, not harder. Access e-books, videos, and more — all in
          one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <Link
            to="/courses"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Browse Courses
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl shadow-md hover:bg-indigo-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl w-full">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-indigo-600">📚 E-Books</h3>
          <p className="text-gray-600 mt-2">
            Access a wide range of digital books curated for your learning
            journey.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-indigo-600">
            🎥 Video Lectures
          </h3>
          <p className="text-gray-600 mt-2">
            Learn from experts with structured video tutorials and step-by-step
            guides.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-indigo-600">
            📊 Progress Tracking
          </h3>
          <p className="text-gray-600 mt-2">
            Stay motivated by tracking your learning goals and achievements.
          </p>
        </div>
      </div>
    </div>
  );
}
