import userService from "../../services/userService";
import { createContext, useContext, useState } from "react";

const fn_error_context_must_be_used = () => {
  throw new Error(
    "must use authContext provider for consumer to work properly"
  );
};

export const authContext = createContext({
  login: fn_error_context_must_be_used,
  logout: fn_error_context_must_be_used,
  createUser: fn_error_context_must_be_used,
  user: null,
});
authContext.displayName = "auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const refreshUser = () => setUser(userService.getUser());

  const login = async (credential) => {
    const response = await userService.loginUser(credential);
    refreshUser();
    return response;
  };

  const logout = () => {
    userService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{ login, logout, user, createUser: userService.createUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
