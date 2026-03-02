import { authService } from "@/api/services/auth";
import router from "@/router";
import { LoginForm, RegisterForm, User } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem("petverse_token"));
  const loading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  async function login(form: LoginForm) {
    loading.value = true;
    error.value = null;

    try {
      const { data } = await authService.login(form);
      token.value = data.token;
      user.value = data.user;
      localStorage.setItem("petverse_token", data.token);
      return true;
    } catch (e: any) {
      error.value = e?.response?.data?.message ?? "Credenciais inválidas";
      return false;
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    user.value = null;
    token.value = null;
    localStorage.removeItem("petverse_token");
    router.push("/login");
  }

  async function fetchMe() {
    if (!token.value) return;
    try {
      console.log("Fetching user data with token:", token.value);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      logout();
    }
  }

  async function register(form: RegisterForm) {
    loading.value = true;
    error.value = null;
    try {
      const { name, email, phone, password } = form;
      const { data } = await authService.register({
        name,
        email,
        password,
        phone,
      });
      console.log(data);
      router.push("/onboarding");
    } catch (e: unknown) {
      const err = e as { response?: { data?: { message?: string } } };
      error.value = err?.response?.data?.message ?? "Erro ao criar conta";
    } finally {
      loading.value = false;
    }
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    fetchMe,
    register,
  };
});
