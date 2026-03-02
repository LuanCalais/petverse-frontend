import { useAuthStore } from "@/stores/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/feed",
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
      meta: { public: true },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/RegisterView.vue"),
      meta: { public: true },
    },
    {
      path: "/onboarding",
      name: "Onboarding",
      component: () => import("@/views/OnboardingView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/feed",
      name: "Feed",
      component: () => import("@/views/FeedView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: "Login" };
  }

  if (to.meta.public && auth.isAuthenticated) {
    return { name: "Feed" };
  }

  return true;
});

export default router;
