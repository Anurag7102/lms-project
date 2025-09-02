// src/pages/CourseDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../api/courses";

export default function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playingAudio, setPlayingAudio] = useState(null);
  const [language, setLanguage] = useState("English"); // default language

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
      {/* Language Selector */}
      <div className="mb-4 flex justify-end items-center">
        <label className="mr-2 font-medium">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          {/* Add more languages here */}
        </select>
      </div>

      {/* Course Title & Description */}
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="mb-4">{course.description}</p>

      {/* Lessons */}
      <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      {course.lessons && course.lessons.length > 0 ? (
        <ul className="space-y-4">
          {course.lessons.map((lesson) => (
            <li key={lesson._id} className="border p-4 rounded shadow">
              <p className="font-medium mb-2">{lesson.title}</p>

              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  {/* E-book */}
                  {lesson.pdf ? (
                    <a
                      href={lesson.pdf} // use backend URL directly
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      E-book
                    </a>
                  ) : (
                    <span className="text-sm text-red-500">
                      No E-book available
                    </span>
                  )}

                  {/* Video */}
                  {lesson.video ? (
                    <a
                      href={lesson.video} // use backend URL directly
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Video
                    </a>
                  ) : (
                    <span className="text-sm text-red-500">
                      No video available
                    </span>
                  )}

                  {/* Podcast / Audio */}
                  {lesson.audio ? (
                    <button
                      onClick={() =>
                        setPlayingAudio(
                          playingAudio === lesson._id ? null : lesson._id
                        )
                      }
                      className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                      {playingAudio === lesson._id
                        ? "Pause Podcast"
                        : "Podcast"}
                    </button>
                  ) : (
                    <span className="text-sm text-red-500">
                      No podcast available
                    </span>
                  )}
                </div>

                {/* Audio Player (renders only if audio exists and is playing) */}
                {lesson.audio && playingAudio === lesson._id && (
                  <audio
                    src={lesson.audio} // backend URL directly
                    controls
                    autoPlay
                    className="mt-2 w-full"
                  >
                    Your browser does not support the audio element.
                  </audio>
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
