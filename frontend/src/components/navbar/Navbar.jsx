import { GraduationCap } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className=" w-full h-14 flex justify-between items-center px-6 py-3 border-b-2 border-zinc-300">
      <h2 className=" text-3xl font-bold flex items-center gap-2">
        {" "}
        <GraduationCap className="w-8 h-8" />
        Pathshala
      </h2>
    </div>
  );
}

export default Navbar;
