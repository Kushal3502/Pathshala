import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useInstructor from "@/context/InstructorContext";
import { ScaleLoader } from "react-spinners";

function Settings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUpload,
    mediaDelete,
    loader,
  } = useInstructor();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("media", file);

    const response = await mediaUpload(formData);

    console.log(response);

    if (response.success) {
      setCourseLandingFormData({
        ...courseLandingFormData,
        image: response.data.secure_url,
      });
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
    </Card>
  );
}

export default Settings;
