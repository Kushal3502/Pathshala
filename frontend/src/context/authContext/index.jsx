import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
