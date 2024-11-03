import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    primaryLanguage: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pricing: {
      type: String,
      required: true,
    },
    objectives: {
      type: String,
      required: true,
    },
    welcomeMessage: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    image_id: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    curriculum: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
      },
    ],
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
