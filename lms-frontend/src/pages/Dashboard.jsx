import { Link } from "react-router-dom";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { DUMMY_COURSES } from "../data/dummyData";
import storage from "../utils/storage";

export default function Dashboard({ user }) {
  const progressAI = storage.get("progress_ai101", { completed: [] });
  const progressBC = storage.get("progress_bc101", { completed: [] });

  const percentAI = Math.round(
    (progressAI.completed.length / DUMMY_COURSES[0].lessons.length) * 100
  );
  const percentBC = Math.round(
    (progressBC.completed.length / DUMMY_COURSES[1].lessons.length) * 100
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold">
        Hi {user?.name || "Learner"} 👋
      </h2>
      <p className="text-gray-600">Keep going — you’re building momentum.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[
          { course: DUMMY_COURSES[0], pct: percentAI },
          { course: DUMMY_COURSES[1], pct: percentBC },
        ].map(({ course, pct }) => (
          <Card key={course.id} className="p-4">
            <div className="flex items-center gap-4">
              <img
                className="w-28 h-20 object-cover rounded-xl border"
                src={course.thumbnail}
                alt={course.title}
              />
              <div className="flex-1">
                <div className="font-semibold">{course.title}</div>
                <div className="mt-2">
                  <ProgressBar value={pct} />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {pct}% complete
                </div>
              </div>
              <Link
                className="px-3 py-1 rounded-xl border whitespace-nowrap"
                to={`/courses/${course.id}`}
              >
                Continue
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-semibold mb-3">Certificates</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 text-sm text-gray-600">
            No certificates yet — finish a course to unlock.
          </Card>
        </div>
      </div>
    </div>
  );
}
