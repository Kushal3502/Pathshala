import useAuth from "@/context/AuthContext";
import { GraduationCap } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className=" w-full h-18 flex justify-between items-center px-10 py-3 border-b-2 border-zinc-300">
      <h2 className=" text-3xl font-bold flex items-center gap-2">
        {" "}
        <GraduationCap className="w-8 h-8" />
        Pathshala
      </h2>
      <div className=" flex items-center gap-4">
        <p className="hidden md:block">
          Welcome, <span className=" text-2xl ">{user.name}</span>
        </p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
