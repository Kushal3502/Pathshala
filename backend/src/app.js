import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: [process.env.CORS, "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use(express.static("public"));

app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";
import mediaRouter from "./routes/media.routes.js";
import courseRouter from "./routes/course.routes.js";
import lecturRouter from "./routes/lecture.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/media", mediaRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/lectures", lecturRouter);

export default app;
