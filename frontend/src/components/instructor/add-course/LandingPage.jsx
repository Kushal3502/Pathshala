import { Form, FormControls } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config/config";
import useInstructor from "@/context/InstructorContext";
import React from "react";
import { useForm } from "react-hook-form";

function LandingPage() {
  const { courseLandingFormData, setCourseLandingFormData } = useInstructor();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handlePublishCourse = async () => {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handlePublishCourse)}>
          <FormControls
            formControls={courseLandingPageFormControls}
            formData={courseLandingFormData}
            setFormData={setCourseLandingFormData}
            register={register}
            control={control}
            errors={errors}
          />
        </form>
      </CardContent>
    </Card>
  );
}

export default LandingPage;
