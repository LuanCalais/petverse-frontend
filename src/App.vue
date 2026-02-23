<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await authStore.fetchMe();
  }
});
</script>

<template>
  <div class="blob blob-1" aria-hidden="true" />
  <div class="blob blob-2" aria-hidden="true" />
  <div class="blob blob-3" aria-hidden="true" />
  <RouterView v-slot="{ Component, route }">
    <Transition
      :name="(route.meta.transition as string) || 'page'"
      mode="out-in"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
