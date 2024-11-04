import { Router } from "express";
import {
  addLecture,
  deleteLecture,
  getLectureById,
  updateLecture,
} from "../controllers/lecture.controller.js";

const router = Router();

router.route("/:courseId").post(addLecture);

router
  .route("/:id")
  .get(getLectureById)
  .patch(updateLecture)
  .delete(deleteLecture);

export default router;
