import { useParams } from "react-router-dom";
import { DUMMY_COURSES } from "../data/dummyData";

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = DUMMY_COURSES.find((c) => c.id === courseId);

  if (!course)
    return <p className="text-center mt-10 text-xl">Course not found!</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <img
        src={course.thumbnail}
        alt={course.title}
        className="mb-4 w-full h-64 object-cover rounded"
      />
      <p className="text-gray-700">{course.description}</p>
    </div>
  );
}
