import { Router } from "express";
import {
  addNewCourse,
  getCourseById,
  getInstructorCourses,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

const router = Router();

router.route("/").get(getInstructorCourses).post(addNewCourse);

router
  .route("/:id")
  .get(getCourseById)
  .patch(updateCourse)
  .delete(deleteCourse);

export default router;
