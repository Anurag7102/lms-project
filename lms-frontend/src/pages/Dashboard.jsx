// src/pages/Dashboard.jsx
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { useCourseContext } from "../context/CourseContext";
import storage from "../utils/storage";

export default function Dashboard({ user }) {
  const { courses } = useCourseContext();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold">
        Hi {user?.name || "Learner"} 👋
      </h2>
      <p className="text-gray-600">Keep going — you’re building momentum.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {courses.map((course) => {
          const progress = storage.get(`progress_${course.id}`, {
            completed: [],
          });
          const pct = Math.round(
            (progress.completed.length / course.lessons.length) * 100
          );

          return (
            <Card key={course.id} course={course}>
              <div className="mt-2">
                <ProgressBar value={pct} />
                <div className="text-xs text-gray-500 mt-1">
                  {pct}% complete
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
