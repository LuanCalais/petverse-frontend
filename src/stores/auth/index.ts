import router from "@/router";
import { User } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem("petverse_token"));
  const loading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  function logout() {
    user.value = null;
    token.value = null;
    localStorage.removeItem("petverse_token");
    router.push("/login");
  }

  function login(data: any) {
    return data;
  }

  return { user, token, loading, error, isAuthenticated, login, logout };
});
