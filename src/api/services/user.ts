import { User } from "@/types";
import api from "../client";

export const UserService = {
  getById: (id: number) => api.get<User>(`/users/${id}`),

  create: (data: User) => api.post<User>("/users", data),

  update: (id: number, data: Partial<User>) =>
    api.put<User>(`/users/${id}`, data),

  uploadAvatar: (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return api.post<{ url: string }>(`/users/${id}/avatar`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
