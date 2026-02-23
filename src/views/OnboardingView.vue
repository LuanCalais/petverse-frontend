<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
</script>

<template>
  <div class="onboarding">
    <div class="card animate-scale-in">
      <div class="confetti" aria-hidden="true">🎉🐾🎊</div>
      <h1>
        Bem-vindo ao PetVerse,<br /><em>{{ authStore.user?.name ?? "Usuário" }}</em
        >!
      </h1>
      <p class="subtitle">
        Seu pet está esperando para criar a conta dele também!
      </p>

      <div class="steps">
        <div class="step-item">
          <span class="step-num">1</span>
          <div>
            <strong>Crie o perfil do seu pet</strong>
            <p>Nome, foto, espécie e uma bio.</p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div>
            <strong>Faça a primeira postagem</strong>
            <p>Mostre ao mundo quem é seu bichinho!</p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">3</span>
          <div>
            <strong>Explore o Feed</strong>
            <p>Veja o que outros pets estão fazendo.</p>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn-primary" @click="router.push('/pets/new')">
          Adicionar meu pet 🐾
        </button>
        <button class="btn-skip" @click="router.push('/feed')">Depois</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.onboarding {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
}

.card {
  position: relative;
  z-index: 1;
  background: var(--c-white);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  width: 100%;
  max-width: 480px;
  box-shadow: var(--shadow-lg);
  border: 1.5px solid var(--c-border);
  text-align: center;
}

.confetti {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: pawBounce 1.5s ease-in-out infinite;
}

h1 {
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  color: var(--c-charcoal);
  line-height: 1.25;
}
h1 em {
  color: var(--c-amber);
  font-style: normal;
}

.subtitle {
  color: var(--c-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  margin-bottom: 2rem;
}
.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.step-num {
  width: 32px;
  height: 32px;
  background: var(--c-amber-light);
  color: var(--c-bark);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.875rem;
  flex-shrink: 0;
  margin-top: 2px;
}
.step-item strong {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--c-charcoal);
  display: block;
  margin-bottom: 0.125rem;
}
.step-item p {
  font-size: 0.825rem;
  color: var(--c-muted);
  margin: 0;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-primary {
  padding: 0.875rem;
  background: var(--c-amber);
  color: white;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-body);
  transition:
    background var(--t-fast),
    transform var(--t-fast) var(--ease-spring),
    box-shadow var(--t-fast);
}
.btn-primary:hover {
  background: var(--c-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
}

.btn-skip {
  color: var(--c-muted);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
  transition: color var(--t-fast);
}
.btn-skip:hover {
  color: var(--c-charcoal);
}
</style>
