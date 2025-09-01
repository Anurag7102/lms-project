import Card from "../components/Card";
import { DUMMY_COURSES } from "../data/dummyData";

export default function Certificate() {
  // Fallback: pick first course
  const courseId = "ai101";
  const course =
    DUMMY_COURSES.find((c) => c.id === courseId) || DUMMY_COURSES[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card className="p-8">
        <div className="text-center">
          <div className="text-sm tracking-widest text-gray-500">
            CERTIFICATE OF COMPLETION
          </div>
          <h2 className="text-3xl font-bold mt-2">{course.title}</h2>
          <p className="mt-4 text-gray-600">
            This certifies that <span className="font-semibold">Student</span>{" "}
            has successfully completed the course requirements.
          </p>
          <div className="mt-8 flex justify-between text-sm text-gray-500">
            <div>AutoLMS</div>
            <div>{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </Card>
      <button
        onClick={() => window.print()}
        className="mt-6 px-4 py-2 rounded-xl bg-black text-white"
      >
        Print / Save as PDF
      </button>
    </div>
  );
}
