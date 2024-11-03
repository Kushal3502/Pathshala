import { Course } from "../models/course.model.js";

const addNewCourse = async (req, res) => {
  const courseData = req.body;

  console.log(courseData);

  try {
    const newCourse = await Course.create({
      ...courseData,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Course not created",
    });
  }
};

const updateCourse = async (req, res) => {};

const getCourseById = async (req, res) => {};

const deleteCourse = async (req, res) => {};

const getInstructorCourses = async (req, res) => {};

export {
  addNewCourse,
  updateCourse,
  getCourseById,
  getInstructorCourses,
  deleteCourse,
};
