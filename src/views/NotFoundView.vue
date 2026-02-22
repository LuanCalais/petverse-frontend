<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="not-found">
    <div class="blob" aria-hidden="true" />
    <div class="content animate-scale-in">
      <span class="emoji">🐾</span>
      <h1>Ops! Página não encontrada</h1>
      <p>Parece que seu pet escapou e levou essa página junto!</p>
      <button class="btn" @click="router.push('/feed')">
        Voltar para o Feed
      </button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-cream);
  position: relative;
  overflow: hidden;
}
.blob {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: var(--c-amber);
  filter: blur(80px);
  opacity: 0.2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  position: relative;
  text-align: center;
  padding: 2rem;
  max-width: 400px;
}
.emoji {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
  animation: pawBounce 2s ease-in-out infinite;
}
h1 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}
p {
  color: var(--c-muted);
  margin-bottom: 2rem;
}
.btn {
  padding: 0.875rem 2rem;
  background: var(--c-amber);
  color: white;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition:
    background var(--t-fast),
    transform var(--t-fast) var(--ease-spring);
}
.btn:hover {
  background: var(--c-primary-dark);
  transform: translateY(-2px);
}
</style>
