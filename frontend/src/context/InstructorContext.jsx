import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config/config";
import { del, post } from "@/utils/api";
import { createContext, useContext, useState } from "react";

export const InstructorContext = createContext(null);

export const InstructorContextProvider = ({ children }) => {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );
  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );
  const [loader, setLoader] = useState(false);

  const mediaUpload = async (formData) => {
    setLoader(true);
    try {
      const response = await post("/media/upload", formData);

      if (response.success) {
        return response;
      } else {
        console.log("Media upload failed");
        return null;
      }
    } catch (error) {
      console.log("Media upload error ::", error.message);
      return { error: error.message };
    } finally {
      setLoader(false);
    }
  };

  const mediaDelete = async (publicId) => {
    setLoader(true);
    try {
      const response = await del(`/media/delete/${publicId}`);

      if (response.success) {
        return response;
      } else {
        console.log("Failed to delete media");
        return null;
      }
    } catch (error) {
      console.log("Media delete error ::", error.message);
      return { error: error.message };
    } finally {
      setLoader(false);
    }
  };

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormData,
        setCourseCurriculumFormData,
        mediaUpload,
        mediaDelete,
        loader,
        setLoader,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

export default function useInstructor() {
  return useContext(InstructorContext);
}
