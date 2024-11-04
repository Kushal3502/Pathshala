import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config/config";
import { del, get, post } from "@/utils/api";
import { createContext, useContext, useState } from "react";

export const InstructorContext = createContext(null);

export const InstructorContextProvider = ({ children }) => {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );
  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );
  const [instructorCourses, setInstructorCourses] = useState([]);
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

  const mediaDelete = async (type, publicId) => {
    setLoader(true);
    try {
      const response = await del(`/media/delete/${type}/${publicId}`);

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

  const fetchInstructorCourses = async (instructorId) => {
    setLoader(true);
    try {
      const response = await get(`/courses/instructor/${instructorId}`);

      if (response.success) {
        return response;
      } else {
        console.log("Course fetch failed");
        return null;
      }
    } catch (error) {
      console.log("Course fetch failed");
      return { error: error.message };
    } finally {
      setLoader(false);
    }
  };

  const addNewCourse = async (instructorId,courseData) => {
    setLoader(true);
    try {
      const response = await post(`/courses/instructor/${instructorId}`, courseData);

      if (response.success) {
        return response.course;
      } else {
        console.log("Course publish failed");
        return null;
      }
    } catch (error) {
      console.log("Course publish error ::", error.message);
      return { error: error.message };
    } finally {
      setLoader(false);
    }
  };

  const addNewLecture = async (courseId, lectureData) => {
    setLoader(true);
    try {
      const response = await post(`/lectures/${courseId}`, lectureData);

      if (response.success) {
        console.log(response);
        return response;
      } else {
        console.log("Lecture add failed");
        return null;
      }
    } catch (error) {
      console.log("Lecture add error ::", error.message);
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
        instructorCourses,
        setInstructorCourses,
        mediaUpload,
        mediaDelete,
        addNewCourse,
        addNewLecture,
        fetchInstructorCourses,
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
