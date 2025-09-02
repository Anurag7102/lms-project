// src/api/progress.js

const API_URL = "http://localhost:5000/api/progress";
const token = localStorage.getItem("token");

export async function markLessonComplete(progressData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(progressData),
  });
  return res.json();
}

export async function getUserProgress(userId) {
  const res = await fetch(`${API_URL}/user/${userId}`);
  return res.json();
}
