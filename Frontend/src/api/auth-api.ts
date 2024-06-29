import http from "../lib/interceptor";
import { Authenticate, LoginPayload, RegisterPayload } from "../types/auth.type";

const AuthApiRequest = {
  login: (payload: LoginPayload) => {
    return http.post<Authenticate>("/auth/login", payload);
  },
  register: (payload: RegisterPayload) => {
    return http.post("/auth/register", payload);
  },
};

export default AuthApiRequest;
