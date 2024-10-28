import { Form } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signUpFormControls } from "@/config/config";
import useAuth from "@/context/authContext";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (formdata) => {
    console.log(formdata);

    const response = await signup(formdata);

    if (response.success) {
      navigate("/auth/signin");
    } else {
      console.log(response.message);
    }
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
          <Form
            formData={signUpFormControls}
            onSubmit={handleSignup}
            buttonText={"Create account"}
          />
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
