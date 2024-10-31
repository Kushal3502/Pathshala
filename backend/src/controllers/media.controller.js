import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

const uploadMedia = async (req, res) => {
  try {
    const mediaLocalPath = req.file.path;

    const response = await uploadOnCloudinary(mediaLocalPath);

    console.log(response);

    return res.status(200).json({
      success: true,
      message: "Media uploaded successfully",
      data: response,
    });
  } catch (error) {
    console.log("Media upload error :: ", error);
    return res.status(400).json({
      success: false,
      message: "Media upload failed",
    });
  }
};

const deleteMedia = async (req, res) => {
  const { publicId } = req.params;

  if (!publicId) throw new Error("Invalid publicId");

  try {
    await deleteFromCloudinary(publicId);

    return res.status(200).json({
      success: true,
      message: "Media deleted successfully",
    });
  } catch (error) {
    console.log("Media delete error :: ", error);
    return res.status(400).json({
      success: false,
      message: "Media delete failed",
    });
  }
};

export { uploadMedia, deleteMedia };
