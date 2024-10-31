import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { deleteMedia, uploadMedia } from "../controllers/media.controller.js";

const router = Router();

router.route("/upload").post(upload.single("media"), uploadMedia);
router.route("/delete/:publicId").delete(deleteMedia);

export default router;
