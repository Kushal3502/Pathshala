import React from "react";
import { Book, ChartBar, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "@/context/AuthContext";
import { Navbar } from "@/components";

function Instructor() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: ChartBar,
      label: "Dashboard",
      value: "dashboard",
      to: "/instructor",
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      to: "/instructor/courses",
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      to: null,
    },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/auth/signin");
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex h-full mt-16">
        <aside className="hidden md:block w-60 p-4 border-r-2 border-zinc-300 fixed h-full top-16">
          <h2 className="text-2xl mb-6 text-left">Instructor View</h2>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <NavLink to={item.to} key={item.value}>
                <Button
                  variant={item.value === "logout" ? "destructive" : "default"}
                  onClick={item.value === "logout" ? handleLogout : undefined}
                  className="w-full text-lg justify-start px-4"
                >
                  <item.icon /> {item.label}
                </Button>
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="flex-1 md:ml-60 overflow-y-auto p-4 bg-gray-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Instructor;
