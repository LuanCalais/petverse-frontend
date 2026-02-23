import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("petverse_token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
        const authStore = useAuthStore();
        authStore.logout();
    }
    return Promise.reject(error);
});

export default api;