import React, { useContext, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Form from "@/components/form/Form";
import { SigninController, SignupController } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthContext } from "@/context/authContext";

function Auth() {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
  } = useContext(AuthContext);

  console.log(signInFormData);

  return (
    <div className="w-full min-h-screen flex justify-center items-center  text-white">
      <Tabs
        defaultValue="signin"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2 bg-zinc-900">
          <TabsTrigger value="signin" className="text-white ">
            Signin
          </TabsTrigger>
          <TabsTrigger value="signup" className="text-white">
            Signup
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card className="bg-zinc-950 text-white border-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl font-normal">
                Sign in to your account
              </CardTitle>
              <CardDescription>
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form
                formControl={SigninController}
                buttonText="Sign in"
                formData={signInFormData}
                setFormData={setSignInFormData}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card className="bg-zinc-950 text-white border-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl font-normal">
                Create a new account
              </CardTitle>
              <CardDescription>
                Enter your details to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form
                formControl={SignupController}
                buttonText="Sign up"
                formData={signUpFormData}
                setFormData={setSignUpFormData}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Auth;
