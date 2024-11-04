import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useInstructor from "@/context/InstructorContext";
import { ScaleLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { notifyError } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

function Settings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    courseCurriculumFormData,
    mediaUpload,
    mediaDelete,
    addNewCourse,
    addNewLecture,
    loader,
  } = useInstructor();

  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    if (courseLandingFormData.image) {
      console.log("hi");
      const response = await mediaDelete(
        "image",
        courseLandingFormData.image_id
      );

      console.log(response);

      if (response.success) {
        setCourseLandingFormData({
          ...courseLandingFormData,
          image: "",
          image_id: "",
        });
      }
    }

    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("media", file);

    const response = await mediaUpload(formData);

    console.log(response);

    if (response.success) {
      setCourseLandingFormData({
        ...courseLandingFormData,
        image: response.data.secure_url,
        image_id: response.data.public_id,
      });
    }
  };

  const handleNewCourse = async () => {
    try {
      const newCourse = await addNewCourse(courseLandingFormData);
      console.log("New Course created:", newCourse);

      if (newCourse && newCourse._id) {
        for (const lecture of courseCurriculumFormData) {
          const newLecture = await addNewLecture(newCourse?._id, lecture);
          console.log("New Lecture added:", newLecture);
        }
        navigate("/instructor");
      } else {
        notifyError("All fields are required");
        throw new Error("Failed to create course.");
      }
    } catch (error) {
      console.log("Course publish error :: ", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Label>Upload Course Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
            disabled={loader}
          />
          {loader && <ScaleLoader color="#000000" className=" mx-auto" />}
          {courseLandingFormData.image && (
            <img src={courseLandingFormData.image} />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleNewCourse}>Publish</Button>
      </CardFooter>
    </Card>
  );
}

export default Settings;
