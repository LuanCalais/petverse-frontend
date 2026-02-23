<script setup lang="ts">
import { onMounted, ref } from "vue";

const showModal = ref(false);
const isLoading = ref(false);
const postsMock = ref([]);

onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <AppLayout>
    <div class="feed">
      <div class="feed-header">
        <div>
          <h1 class="feed-title">Feed 🐾</h1>
          <p class="feed-sub">Veja o que os pets estão aprontando</p>
        </div>
        <button class="btn-new-post" @click="showModal = true">
          + Novo post
        </button>
      </div>
      <div v-if="isLoading" class="loading-state">
        <div class="loading-paw">🐾</div>
        <p>Buscando as aventuras dos pets…</p>
      </div>
      <div
        v-else-if="postsMock.length === 0"
        class="empty-state"
      >
        <span class="empty-icon">📭</span>
        <h3>Feed vazio!</h3>
        <p>Nenhum pet postou ainda. Seja o primeiro!</p>
        <button class="btn-new-post" @click="showModal = true">
          Criar post
        </button>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feed-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.feed-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--c-charcoal);
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
}

.feed-sub {
  color: var(--c-muted);
  font-size: 0.875rem;
}

.btn-new-post {
  padding: 0.625rem 1.25rem;
  background: var(--c-amber);
  color: white;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.875rem;
  font-family: var(--font-body);
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background var(--t-fast),
    transform var(--t-fast) var(--ease-spring),
    box-shadow var(--t-fast);
}
.btn-new-post:hover {
  background: var(--c-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 4rem 0;
  color: var(--c-muted);
}
.loading-paw {
  font-size: 2.5rem;
  animation: pawBounce 1s ease-in-out infinite;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 4rem 0;
  text-align: center;
}
.empty-icon {
  font-size: 3rem;
}
.empty-state h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
}
.empty-state p {
  color: var(--c-muted);
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.load-more {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.btn-load-more {
  padding: 0.625rem 1.5rem;
  background: var(--c-white);
  border: 1.5px solid var(--c-border);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.875rem;
  font-family: var(--font-body);
  color: var(--c-charcoal);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    background var(--t-fast),
    border-color var(--t-fast);
}
.btn-load-more:hover:not(:disabled) {
  background: var(--c-sand);
  border-color: var(--c-amber);
}
.btn-load-more:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--c-border);
  border-top-color: var(--c-amber);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
</style>
