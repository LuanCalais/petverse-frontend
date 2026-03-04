<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import type { LoginForm } from "@/types";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const form = reactive<LoginForm>({
  email: "",
  password: "",
});

async function handleSubmit() {
  const res = await authStore.login(form);
  if (res) router.push('/feed');
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card animate-scale-in">
      <div class="logo-block">
        <span class="paw-icon" aria-hidden="true">🐾</span>
        <h1 class="logo-title">PetVerse</h1>
        <p class="logo-sub">O Instagram do seu bichinho</p>
      </div>

      <form class="auth-form" @submit.prevent="handleSubmit">
        <div v-if="authStore.error" class="error-banner">
          {{ authStore.error }}
        </div>

        <div class="field">
          <label for="email" class="label">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="input"
            placeholder="voce@email.com"
            required
            autocomplete="email"
          />
        </div>

        <div class="field">
          <label for="password" class="label">Senha</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="input"
            placeholder="••••••••"
            required
            autocomplete="current-password"
          />
        </div>

        <button type="submit" class="btn-primary" :disabled="authStore.loading">
          <span v-if="authStore.loading" class="spinner" />
          <span v-else>Entrar 🐶</span>
        </button>
      </form>

      <p class="auth-switch">
        Ainda não tem conta?
        <RouterLink to="/register" class="link">Criar conta</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
}

.auth-card {
  position: relative;
  z-index: 1;
  background: var(--c-white);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: var(--shadow-lg);
  border: 1.5px solid var(--c-border);
}

.logo-block {
  text-align: center;
  margin-bottom: 2rem;
}

.paw-icon {
  display: inline-block;
  font-size: 3rem;
  animation: pawBounce 2s ease-in-out infinite;
  margin-bottom: 0.5rem;
}

.logo-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--c-charcoal);
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
}

.logo-sub {
  color: var(--c-muted);
  font-size: 0.9rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-charcoal);
}

.input {
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--c-border);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  background: var(--c-cream);
  color: var(--c-charcoal);
  outline: none;
  transition:
    border-color var(--t-fast) var(--ease-smooth),
    box-shadow var(--t-fast) var(--ease-smooth);
}
.input:focus {
  border-color: var(--c-amber);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
  background: var(--c-white);
}
.input::placeholder {
  color: #c4b8ac;
}

.btn-primary {
  padding: 0.875rem 1.5rem;
  background: var(--c-amber);
  color: var(--c-white);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-body);
  letter-spacing: 0.01em;
  transition:
    background var(--t-fast),
    transform var(--t-fast) var(--ease-spring),
    box-shadow var(--t-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.btn-primary:hover:not(:disabled) {
  background: var(--c-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
}
.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}
.btn-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.error-banner {
  background: #fee2e2;
  color: #991b1b;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.auth-switch {
  text-align: center;
  color: var(--c-muted);
  font-size: 0.9rem;
}
.link {
  color: var(--c-amber);
  font-weight: 600;
  transition: color var(--t-fast);
}
.link:hover {
  color: var(--c-primary-dark);
}
</style>
