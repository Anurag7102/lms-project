import { createContext, useState, useContext } from "react";
import { DUMMY_COURSES, DUMMY_QUIZZES } from "../data/dummyData";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState(DUMMY_COURSES);
  const [quizzes, setQuizzes] = useState(DUMMY_QUIZZES);

  const addCourse = (course) => setCourses([...courses, course]);
  const updateCourse = (id, updatedCourse) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, ...updatedCourse } : c))
    );
  };
  const deleteCourse = (id) => setCourses(courses.filter((c) => c.id !== id));

  const addQuiz = (courseId, lessonId, quiz) => {
    setQuizzes({
      ...quizzes,
      [courseId]: { ...(quizzes[courseId] || {}), [lessonId]: quiz },
    });
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        quizzes,
        addCourse,
        updateCourse,
        deleteCourse,
        addQuiz,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

// <-- Add this hook at the bottom
export function useCourseContext() {
  return useContext(CourseContext);
}
