import { Authenticate } from "../types/auth.type";

export const getUser = () => {
  const user = localStorage.getItem("authenticated");
  if (user !== null) {
    return JSON.parse(user) as Authenticate;
  }
  return null;
};
export const logout = () => {
  localStorage.removeItem("authenticated");
};
