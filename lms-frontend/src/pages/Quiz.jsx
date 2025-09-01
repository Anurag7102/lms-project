import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useCourseContext } from "../context/CourseContext";

export default function Quiz() {
  const { courseId, lessonId } = useParams();
  const { courses } = useCourseContext();
  const questions =
    courses.find((c) => c.id === courseId)?.quizzes?.[lessonId] || [];

  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const submit = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });
    setScore(s);
    setShowResult(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold">Quiz</h2>
      {questions.length === 0 && (
        <p className="text-gray-500">No quiz for this lesson yet.</p>
      )}

      <div className="mt-6 space-y-6">
        {questions.map((q, idx) => (
          <Card key={idx} className="p-4">
            <div className="font-medium">
              {idx + 1}. {q.q}
            </div>
            <div className="mt-3 grid gap-2">
              {q.options.map((opt, oi) => (
                <label key={oi} className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name={`q_${idx}`}
                    checked={answers[idx] === oi}
                    onChange={() => setAnswers((a) => ({ ...a, [idx]: oi }))}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={submit}
          className="px-4 py-2 rounded-xl bg-black text-white"
        >
          Submit
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-xl border"
        >
          Back
        </button>
      </div>

      {showResult && (
        <Card className="p-4 mt-6">
          <div className="font-semibold">Result</div>
          <div className="text-gray-700">
            Score: {score} / {questions.length}
          </div>
          <div className="text-sm text-gray-500">
            {score === questions.length
              ? "Great job! Lesson unlocked."
              : "Review and try again."}
          </div>
        </Card>
      )}
    </div>
  );
}
