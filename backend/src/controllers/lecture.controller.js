import { Course } from "../models/course.model.js";
import { Lecture } from "../models/lecture.model.js";

const addLecture = async (req, res) => {
  const lectureData = req.body;
  const { courseId } = req.params;
console.log(lectureData);
  try {
    // Create new lecture
    const newLecture = await Lecture.create({ ...lectureData });

    // Find course by ID
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Invalid courseId",
      });
    }

    // Add lecture ID to course curriculum
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { $push: { curriculum: newLecture._id } },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(400).json({
        success: false,
        message: "Failed to add lecture to course",
      });
    }

    // Send success response
    res.status(201).json({
      success: true,
      message: "New lecture added",
      lecture: newLecture,
    });
  } catch (error) {
    // Catch any other errors and respond
    res.status(400).json({
      success: false,
      message: "Lecture not added",
      error: error.message,
    });
  }
};

const getLectureById = async (req, res) => {};

const updateLecture = async (req, res) => {};

const deleteLecture = async (req, res) => {};

export { addLecture, getLectureById, updateLecture, deleteLecture };
