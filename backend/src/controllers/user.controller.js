import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  decodeToken,
  generateCookies,
  validateToken,
} from "../utils/generateCookies.js";

const signupUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if ([name, email, password, role].some((value) => value?.trim() === "")) {
    throw new Error("All fields are required");
  }

  try {
    const isUserAlreadyExists = await User.findOne({ email });

    if (isUserAlreadyExists)
      res.staus(400).json({
        success: false,
        message: "User already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const currentUser = await User.findById(newUser._id).select("-password");

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      currentUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User not created",
    });
  }
};

const signinUser = async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((value) => value?.trim() === "")) {
    throw new Error("All fields are required");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const currentUser = await User.findById(user._id).select("-password");

    generateCookies(
      res,
      currentUser._id,
      currentUser.name,
      currentUser.email,
      currentUser.role
    );

    return res
      .status(200)
      .json({ success: true, message: "User logged in", currentUser });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Sign in error",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ success: true, message: "User logged out" });
};

const checkAuth = async (req, res) => {
  const token = req.cookies.token;

  if (token && validateToken(token)) {
    const user = decodeToken(token);
    return res.status(200).json({ success: true, currentUser: user });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "User not authenticated" });
  }
};

export { signupUser, signinUser, logout, checkAuth };
