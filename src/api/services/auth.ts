import { LoginForm, RegisterForm, User } from "@/types";
import api from "../client";

export const authService = {
  login: (data: LoginForm) => api.post("/auth/login", data),
  register: (data: Omit<RegisterForm, "confirmPassword">) =>
    api.post<{ token: string; user: User }>("/auth", data),
  me: () => api.get<User>("/auth/me"),
};
