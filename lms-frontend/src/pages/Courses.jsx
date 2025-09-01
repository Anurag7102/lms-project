// src/pages/Courses.jsx
import Card from "../components/Card";
import { DUMMY_COURSES } from "../data/dummyData";

export default function Courses() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DUMMY_COURSES.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
