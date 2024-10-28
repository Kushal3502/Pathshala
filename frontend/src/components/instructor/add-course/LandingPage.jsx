import { Form } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config/config";
import React from "react";

function LandingPage() {
  const handlePublishCourse = async () => {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          formData={courseLandingPageFormControls}
          onSubmit={handlePublishCourse}
          buttonText={"Publish"}
        />
      </CardContent>
    </Card>
  );
}

export default LandingPage;
