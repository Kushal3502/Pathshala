import { Router } from "express";
import {
  checkAuth,
  logout,
  signinUser,
  signupUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(signupUser);

router.route("/signin").post(signinUser);

router.route("/logout").post(logout);

router.route("/me").get(checkAuth);

export default router;
