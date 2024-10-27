import { createContext, useContext, useEffect, useState } from "react";
import { post, get } from "@/utils/api";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await get("/users/me");
        if (response.currentUser) setUser(response.currentUser);
      } catch (error) {
        console.log("User not authenticated:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

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

  const logout = async () => {
    try {
      await post("/users/logout");
      setUser(null);
    } catch (error) {
      console.log("Logout error :: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, setUser, signin, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
