import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { courseCurriculumInitialFormData } from "@/config/config";
import useInstructor from "@/context/InstructorContext";
import { Trash2 } from "lucide-react";
import React from "react";

function Curriculum() {
  const { courseCurriculumFormData, setCourseCurriculumFormData } =
    useInstructor();

  const handleNewLecture = () => {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  };

  const handleTitleChange = (e, index) => {
    const currCurriculumData = [...courseCurriculumFormData];

    currCurriculumData[index] = {
      ...currCurriculumData[index],
      title: e.target.value,
    };

    setCourseCurriculumFormData(currCurriculumData);
  };

  const handleDescriptionChange = (e, index) => {
    const currCurriculumData = [...courseCurriculumFormData];

    currCurriculumData[index] = {
      ...currCurriculumData[index],
      description: e.target.value,
    };

    setCourseCurriculumFormData(currCurriculumData);
  };

  const handleFreePreviewChange = (value, index) => {
    const currCurriculumData = [...courseCurriculumFormData];

    currCurriculumData[index] = {
      ...currCurriculumData[index],
      freePreview: value,
    };

    setCourseCurriculumFormData(currCurriculumData);
  };

  const handleDeleteLecture = (index) => {
    setCourseCurriculumFormData(
      courseCurriculumFormData.filter((_, idx) => idx !== index)
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className=" text-xl">Create course curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        {courseCurriculumFormData.map((item, index) => (
          <Card
            key={`item.title-${index + 1}`}
            className=" my-4 p-4 flex flex-col gap-4 "
          >
            <div className="flex gap-5 justify-between items-center">
              <h2 className=" text-xl font-semibold">Lecture {index + 1}</h2>
              <div className="flex items-center space-x-2">
                <Switch
                  id={`free-preview-${index + 1}`}
                  onCheckedChange={(value) =>
                    handleFreePreviewChange(value, index)
                  }
                  checked={item.freePreview}
                />
                <Label htmlFor={`free-preview-${index + 1}`}>
                  Free preview
                </Label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                type="text"
                placeholder="Enter lecture title"
                value={item.title}
                onChange={(e) => handleTitleChange(e, index)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter lecture description"
                value={item.description}
                onChange={(e) => handleDescriptionChange(e, index)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Video</Label>
              <Input type="file" accept="video/*" 
                onChange={(e) => handleFileChange(e, index)}
              />
            </div>
            <div className=" flex justify-end">
              {index > 0 ? (
                <Button
                  className=" bg-red-600 hover:bg-red-700 ml-3"
                  onClick={() => handleDeleteLecture(index)}
                >
                  <Trash2 />
                  <p>Delete lecture</p>
                </Button>
              ) : null}
            </div>
          </Card>
        ))}
        <Button onClick={handleNewLecture}>Add lecture</Button>
      </CardContent>
    </Card>
  );
}

export default Curriculum;
