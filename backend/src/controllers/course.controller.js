import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";

const addNewCourse = async (req, res) => {
  const courseData = req.body;
  const { instructorId } = req.params;

  console.log(courseData);

  try {
    const newCourse = await Course.create({
      ...courseData,
      instructor: instructorId,
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

const getInstructorCourses = async (req, res) => {
  const { instructorId } = req.params;
  console.log(instructorId);
  try {
    const currInstructor = await User.findById(instructorId);

    if (!currInstructor)
      res.status(400).json({
        success: false,
        message: "Invalid instructorId",
      });

    const instructorCourses = await Course.find({
      instructor: currInstructor._id,
    });

    res.status(200).json({
      success: true,
      message: "Course fetched successfully",
      courses: instructorCourses,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export {
  addNewCourse,
  updateCourse,
  getCourseById,
  getInstructorCourses,
  deleteCourse,
};
