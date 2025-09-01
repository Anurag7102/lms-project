import { Link } from "react-router-dom";

export default function Navbar({ isAuthed, onLogout }) {
  return (
    <div className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          AutoLMS
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" to="/courses">
            Courses
          </Link>
          {isAuthed && (
            <Link className="hover:underline" to="/dashboard">
              Dashboard
            </Link>
          )}
          {!isAuthed ? (
            <>
              <Link className="px-3 py-1 rounded-xl border" to="/login">
                Login
              </Link>
              <Link
                className="px-3 py-1 rounded-xl bg-black text-white"
                to="/register"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="px-3 py-1 rounded-xl bg-black text-white"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
