import { post } from "@/utils/api";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = async (formData) => {
    try {
      const newUser = await post("/users/signup", formData);
      setUser(newUser.currentUser);
      return newUser;
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, message: error.data.message };
    }
  };

  const signin = async (formData) => {
    try {
      const authenticatedUser = await post("/users/signin", formData);
      setUser(authenticatedUser.currentUser);
      return authenticatedUser;
    } catch (error) {
      console.error("Signin error:", error);
      return { success: false, message: error.data.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
