import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCourseContext } from "../context/CourseContext";
import storage from "../utils/storage";

export default function LessonDetail() {
  const { courseId, lessonId } = useParams();
  const { courses } = useCourseContext();
  const course = courses.find((c) => c.id === courseId);
  const lesson = course?.lessons.find((l) => l.id === lessonId);
  const navigate = useNavigate();

  const [progress, setProgress] = useState(() =>
    storage.get(`progress_${courseId}`, { completed: [] })
  );

  useEffect(
    () => storage.set(`progress_${courseId}`, progress),
    [courseId, progress]
  );

  if (!course || !lesson)
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">Lesson not found.</div>
    );

  const markComplete = () => {
    if (!progress.completed.includes(lessonId)) {
      setProgress({
        ...progress,
        completed: [...progress.completed, lessonId],
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="aspect-video w-full bg-gray-100 rounded-2xl border flex items-center justify-center">
        Video Placeholder
      </div>
      <h2 className="text-2xl font-semibold mt-4">{lesson.title}</h2>
      <p className="text-gray-600">
        This is placeholder content for the lesson. Replace with actual content.
      </p>
      <div className="mt-6 flex gap-3">
        <button onClick={markComplete} className="px-4 py-2 rounded-xl border">
          Mark as Complete
        </button>
        <button
          onClick={() => navigate(`/quiz/${courseId}/${lessonId}`)}
          className="px-4 py-2 rounded-xl bg-black text-white"
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
}
