import { createContext, useContext, useEffect, useState } from "react";
import { post, get } from "@/utils/api";
import { initialSignInFormData, initialSignUpFormData } from "@/config/config";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

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

  const signup = async (signUpFormData) => {
    try {
      const newUser = await post("/users/signup", signUpFormData);
      setUser(newUser.currentUser);
      return newUser;
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, message: error.data.message };
    }
  };

  const signin = async (signInFormData) => {
    try {
      const authenticatedUser = await post("/users/signin", signInFormData);
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
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        user,
        isLoading,
        setUser,
        signin,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
