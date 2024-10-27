import useAuth from "@/context/AuthContext";
import React from "react";
import { Outlet } from "react-router-dom";

function Instructor() {
    const { user } = useAuth()
    console.log(user);
  return (
    <div>
      Instructor
      <Outlet />
    </div>
  );
}

export default Instructor;
