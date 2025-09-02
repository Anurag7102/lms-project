// src/pages/CourseDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../api/courses";

export default function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourse(courseId);
        setCourse(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) return <p>Loading course...</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="mb-4">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      {course.lessons && course.lessons.length > 0 ? (
        <ul className="space-y-4">
          {course.lessons.map((lesson) => (
            <li key={lesson._id} className="border p-4 rounded shadow">
              <p className="font-medium mb-2">{lesson.title}</p>
              <div className="flex gap-4">
                {lesson.pdf && (
                  <a
                    href={lesson.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    E-book
                  </a>
                )}
                {lesson.video && (
                  <a
                    href={lesson.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Video
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lessons yet.</p>
      )}
    </div>
  );
}
