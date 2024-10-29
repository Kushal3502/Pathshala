import { Form } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signInFormControls } from "@/config/config";
import useAuth from "@/context/AuthContext";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const { signInFormData, setSignInFormData, signin } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async (formdata) => {
    console.log(formdata);

    const response = await signin(formdata);
    console.log(response);
    if (response.success) {
      if (response.currentUser.role === "student") navigate("/");
      else navigate("/instructor");
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
          <Form
            onSubmit={handleSignin}
            buttonText={"Sign In"}
            formData={signInFormData}
            setFormData={setSignInFormData}
            formControls={signInFormControls}
          />
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
