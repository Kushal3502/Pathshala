import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => console.log("Error :: ", error));

    app.listen(process.env.PORT, () =>
      console.log("Server is running on port :: ", process.env.PORT)
    );
  })
  .catch((error) => console.log("MongoDB connection error :: ", error));
