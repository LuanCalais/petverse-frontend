<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { RegisterForm } from "@/types";
import { reactive, ref } from "vue";

const authStore = useAuthStore();

const form = reactive<RegisterForm>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
});

const passwordMismatch = ref(false);

function handleSubmit() {
  if (form.password !== form.confirmPassword) {
    passwordMismatch.value = true;
    return;
  }
  passwordMismatch.value = false;
  authStore.register(form);
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card animate-scale-in">
      <div class="logo-block">
        <span class="paw-icon" aria-hidden="true">🐾</span>
        <h1 class="logo-title">PetVerse</h1>
        <p class="logo-sub">Crie sua conta e a do seu pet também!</p>
      </div>

      <form class="auth-form" @submit.prevent="handleSubmit">
        <div v-if="authStore.error" class="error-banner">
          {{ authStore.error }}
        </div>
        <div v-if="passwordMismatch" class="error-banner">
          As senhas não coincidem!
        </div>

        <div class="field">
          <label class="label">Seu nome</label>
          <input
            v-model="form.name"
            type="text"
            class="input"
            placeholder="Maria Silva"
            required
          />
        </div>

        <div class="field">
          <label class="label">E-mail</label>
          <input
            v-model="form.email"
            type="email"
            class="input"
            placeholder="voce@email.com"
            required
          />
        </div>

        <div class="field">
          <label class="label"
            >Telefone <span class="optional">(opcional)</span></label
          >
          <input
            v-model="form.phone"
            type="tel"
            class="input"
            placeholder="+55 11 99999-9999"
          />
        </div>

        <div class="field">
          <label class="label">Senha</label>
          <input
            v-model="form.password"
            type="password"
            class="input"
            placeholder="••••••••"
            required
            minlength="8"
          />
        </div>
        <div class="field">
          <label class="label">Confirmar senha</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            class="input"
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" class="btn-primary" :disabled="authStore.loading">
          <span v-if="authStore.loading" class="spinner" />
          <span v-else>Criar conta 🎉</span>
        </button>
      </form>

      <p class="auth-switch">
        Já tem conta?
        <RouterLink to="/login" class="link">Entrar</RouterLink>
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
  max-width: 460px;
  box-shadow: var(--shadow-lg);
  border: 1.5px solid var(--c-border);
}

.logo-block {
  text-align: center;
  margin-bottom: 2rem;
}
.paw-icon {
  display: inline-block;
  font-size: 2.5rem;
  animation: pawBounce 2s ease-in-out infinite;
  margin-bottom: 0.4rem;
}
.logo-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
}
.logo-sub {
  color: var(--c-muted);
  font-size: 0.875rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-bottom: 1.5rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}
.fields-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-charcoal);
}
.optional {
  color: var(--c-muted);
  font-weight: 400;
}

.input {
  padding: 0.7rem 1rem;
  border: 1.5px solid var(--c-border);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  background: var(--c-cream);
  color: var(--c-charcoal);
  outline: none;
  transition:
    border-color var(--t-fast),
    box-shadow var(--t-fast);
}
.input:focus {
  border-color: var(--c-teal);
  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
  background: var(--c-white);
}
.input::placeholder {
  color: #c4b8ac;
}

.btn-primary {
  padding: 0.875rem;
  background: var(--c-teal);
  color: white;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-body);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition:
    background var(--t-fast),
    transform var(--t-fast) var(--ease-spring),
    box-shadow var(--t-fast);
}
.btn-primary:hover:not(:disabled) {
  background: #0f766e;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(13, 148, 136, 0.3);
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
  color: var(--c-teal);
  font-weight: 600;
}
.link:hover {
  color: #0f766e;
}

@media (max-width: 480px) {
  .fields-row {
    grid-template-columns: 1fr;
  }
}
</style>
