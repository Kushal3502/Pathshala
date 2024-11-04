import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/context/AuthContext";
import useInstructor from "@/context/InstructorContext";

function InstructorDashboard() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const { fetchInstructorCourses, instructorCourses, setInstructorCourses } =
    useInstructor();

  const fetchCourse = async () => {
    const response = await fetchInstructorCourses(user?.userId);

    setInstructorCourses(response.courses);

  };

  useEffect(() => {
    fetchCourse();
  }, [user?.userId]);

  return (
    <div>
      <h1 className=" text-3xl font-semibold my-4">Dashboard</h1>
      <Card>
        <CardHeader className=" flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">All courses</CardTitle>
          <Button
            size="lg"
            className=" text-base"
            onClick={() => navigate("/instructor/add-course")}
          >
            Create new course
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="text-base">
                <TableHead>Course</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {instructorCourses?.map((course) => (
                <TableRow>
                  <TableCell className="font-semibold text-base">
                    {course?.title}
                  </TableCell>
                  <TableCell>{course?.students.length}</TableCell>
                  <TableCell>Rs. {course?.pricing}</TableCell>
                  <TableCell className="text-right">
                    <Button className="mr-2 bg-green-600 hover:bg-green-700">
                      <Pencil />
                    </Button>
                    <Button className=" bg-red-600 hover:bg-red-700">
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstructorDashboard;
