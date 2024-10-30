import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config/config";
import { createContext, useContext, useState } from "react";

export const InstructorContext = createContext(null);

export const InstructorContextProvider = ({ children }) => {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );
  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormData,
        setCourseCurriculumFormData,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

export default function useInstructor() {
  return useContext(InstructorContext);
}
