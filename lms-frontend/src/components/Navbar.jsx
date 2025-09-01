import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          LMS
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/courses" className="hover:text-yellow-400">
            Courses
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
