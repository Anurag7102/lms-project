// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="bg-[#1f2937] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Brand & Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl font-bold tracking-wide hover:text-gray-300 transition"
          >
            LMS
          </Link>

          <Link
            to="/courses"
            className="hover:text-gray-300 transition text-sm font-medium"
          >
            Courses
          </Link>

          <Link
            to="/about"
            className="hover:text-gray-300 transition text-sm font-medium"
          >
            About
          </Link>

          {/* Admin-only link */}
          {user?.role === "admin" && (
            <Link
              to="/admin/users"
              className="hover:text-gray-300 transition text-sm font-medium"
            >
              User List
            </Link>
          )}
        </div>

        {/* Right: Auth controls */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/register"
                className="bg-transparent border border-white text-white text-sm px-4 py-2 rounded-lg hover:bg-white hover:text-[#1f2937] transition"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow transition"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm italic mr-4">
                Welcome, {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
