// src/App.jsx
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCourse from "./pages/AddCourse";
import EditCourse from "./pages/EditCourse";
import AddLesson from "./pages/AddLesson";
import EditLesson from "./pages/EditLesson";
import AdminUsers from "./pages/AdminUsers";

function App() {
  const [user, setUser] = useState(null);

  // On mount, get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* pass setUser too so Navbar can react immediately */}
        <Navbar user={user} setUser={setUser} onLogout={handleLogout} />

        <main className="flex-grow">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />

            {/* Auth */}
            <Route
              path="/login"
              element={
                !isLoggedIn ? (
                  <Login setUser={setUser} />
                ) : (
                  <Navigate to="/courses" />
                )
              }
            />
            <Route path="/register" element={<Register />} />

            {/* Admin-only */}
            {isLoggedIn && user?.role === "admin" && (
              <>
                <Route path="/courses/add" element={<AddCourse />} />
                <Route path="/courses/edit/:id" element={<EditCourse />} />
                <Route
                  path="/courses/:courseId/lessons/add"
                  element={<AddLesson />}
                />
                <Route
                  path="/courses/:courseId/lessons/edit/:id"
                  element={<EditLesson />}
                />
                <Route path="/admin/users" element={<AdminUsers />} />
              </>
            )}

            {/* Unknown */}
            <Route path="*" element={<Navigate to="/courses" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
