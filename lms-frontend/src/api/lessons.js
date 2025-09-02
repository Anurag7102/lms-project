const LESSONS_API_URL = "http://localhost:5000/api/lessons";
const token = localStorage.getItem("token"); // for admin-only actions

// Get all lessons for a course
export async function getLessons(courseId) {
  try {
    const res = await fetch(`${LESSONS_API_URL}?courseId=${courseId}`);
    if (!res.ok)
      throw new Error(
        `Failed to fetch lessons: ${res.status} ${res.statusText}`
      );
    return res.json();
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return [];
  }
}

// Admin: Add a lesson
export async function addLesson(lessonData) {
  const res = await fetch(LESSONS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lessonData),
  });
  return res.json();
}

// Admin: Edit a lesson
export async function editLesson(lessonId, lessonData) {
  const res = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lessonData),
  });
  return res.json();
}

// Admin: Delete a lesson
export async function deleteLesson(lessonId) {
  const res = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
