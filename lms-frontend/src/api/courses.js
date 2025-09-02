// src/api/courses.js
const BASE_URL = "http://localhost:5000/api/courses";

// Fetch all courses
export const getCourses = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch courses");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error in getCourses:", err);
    return [];
  }
};

// Fetch single course
export const getCourse = async (id) => {
  try {
    if (!id) throw new Error("Course ID is required");
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Course not found");
    return await res.json();
  } catch (err) {
    console.error("Error in getCourse:", err);
    throw err;
  }
};

// Add a course
export const addCourse = async (courseData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(courseData),
  });
  if (!res.ok) throw new Error("Failed to add course");
  return res.json();
};

// Edit a course
export const editCourse = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Failed to edit course");
  return res.json();
};
