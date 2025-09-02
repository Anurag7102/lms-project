// src/App.jsx
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

function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isLoggedIn = !!token;

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />

        {/* Auth */}
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/courses" />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <Register /> : <Navigate to="/courses" />}
        />

        {/* Admin-only */}
        {isLoggedIn && role === "admin" && (
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
          </>
        )}

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/courses" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
