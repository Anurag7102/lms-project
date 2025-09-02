import { createContext, useState } from "react";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <CourseContext.Provider
      value={{ courses, setCourses, selectedCourse, setSelectedCourse }}
    >
      {children} {/* important: don't add extra divs or wrappers */}
    </CourseContext.Provider>
  );
}
