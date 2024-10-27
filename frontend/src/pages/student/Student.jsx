import React from "react";
import { Outlet } from "react-router-dom";

function Student() {

  return (
    <div>
      Student
      <Outlet />
    </div>
  );
}

export default Student;
