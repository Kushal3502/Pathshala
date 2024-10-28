import { Curriculum, LandingPage, Settings } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function AddCourse() {
  return (
    <div className=" w-full">
      <Card>
        <CardHeader className=" flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Create new course</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="curriculum" className="space-y-4">
            <TabsList >
              <TabsTrigger value="curriculum" className=" font-semibold">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="landing-page" className=" font-semibold">
                Course Landing Page
              </TabsTrigger>
              <TabsTrigger value="settings" className=" font-semibold">
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="curriculum">
              <Curriculum />
            </TabsContent>
            <TabsContent value="landing-page">
              <LandingPage />
            </TabsContent>
            <TabsContent value="settings">
              <Settings />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddCourse;
