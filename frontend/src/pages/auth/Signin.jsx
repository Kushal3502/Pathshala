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
import useAuth from "@/context/AuthContext";
import { post } from "@/utils/api";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async (formdata) => {
    console.log(formdata);

    const response = await signin(formdata);

    if (response.success) {
      navigate("/");
    } else {
      console.log(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-[450px] bg-white shadow-lg rounded-lg">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl font-semibold text-gray-800 ">
            Sign in to your account
          </CardTitle>
          <CardDescription className="text-gray-600 mt-1">
            Enter email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSignin)}>
            <div className="grid gap-2">
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
              <Button className="w-full mt-2 text-base">Sign in</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-gray-600 gap-2">
          <p>
            Don&apos;t have an account?{" "}
            <Link
              to={"/auth/signup"}
              className="text-indigo-600 hover:underline"
            >
              Create account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signin;
