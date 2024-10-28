import React from "react";
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

function InstructorDashboard() {
  return (
    <div>
      <h1 className=" text-3xl font-semibold my-4">Dashboard</h1>
      <Card>
        <CardHeader className=" flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">All courses</CardTitle>
          <Button size="lg" className=" text-base">
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
              <TableRow>
                <TableCell className="font-semibold text-base">
                  React Js Crash Course
                </TableCell>
                <TableCell>69</TableCell>
                <TableCell>$6900</TableCell>
                <TableCell className="text-right">
                  <Button className="mr-2 bg-green-600 hover:bg-green-700">
                    <Pencil />
                  </Button>
                  <Button className=" bg-red-600 hover:bg-red-700">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstructorDashboard;
