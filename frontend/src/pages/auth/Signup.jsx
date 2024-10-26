import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleSignup = async (formdata) => {
    console.log(formdata);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-[450px] bg-white shadow-lg rounded-lg">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl font-semibold text-gray-800 ">
            Create a new account
          </CardTitle>
          <CardDescription className="text-gray-600 mt-1">
            Enter email and password to create new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="grid gap-2">
              <div className="flex flex-col space-y-2">
                <Label className="text-base text-gray-700">Name</Label>
                <Input
                  type="text"
                  placeholder="john@gmail.com"
                  className="border-gray-300"
                  {...register("name")}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Label className="text-base text-gray-700">Email</Label>
                <Input
                  type="email"
                  placeholder="john@gmail.com"
                  className="border-gray-300"
                  {...register("email", {
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email address!!!",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Label className="text-base text-gray-700">Password</Label>
                <Input
                  type="password"
                  placeholder="******"
                  className="border-gray-300"
                  {...register("password", {
                    minLength: {
                      value: 5,
                      message: "Password must be atleast 5 characters long!!!",
                    },
                  })}
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <div className="flex gap-2 mt-2 items-center">
                <Label className="text-base text-gray-700">Role : </Label>
                <div className="flex items-center space-x-4">
                  <Label className="flex items-center space-x-2 text-base">
                    <Input
                      type="radio"
                      value="student"
                      {...register("role", { required: "Role is required" })}
                      className="form-radio text-indigo-600"
                    />
                    <span className="text-gray-700">Student</span>
                  </Label>
                  <Label className="flex items-center space-x-2 text-base">
                    <Input
                      type="radio"
                      value="instructor"
                      {...register("role")}
                      className="form-radio  text-indigo-600"
                    />
                    <span className="text-gray-700">Instructor</span>
                  </Label>
                </div>
                {errors.role && (
                  <div className="text-red-500">{errors.role.message}</div>
                )}
              </div>
              <Button className="w-full mt-2 text-base">Sign in</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-gray-600 gap-2">
          <p>
            Already have an account?{" "}
            <Link
              to={"/auth/signin"}
              className="text-indigo-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;
