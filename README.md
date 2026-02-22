# PetVerse Frontend 🐾

Frontend da rede social PetVerse — O Instagram do seu bichinho.

## Stack

- **Vite 5** + **Vue 3** (Composition API) + **TypeScript**
- **Pinia** — Gerenciamento de estado
- **Vue Router 4** — Roteamento com guards de autenticação
- **Axios** — HTTP client com interceptors JWT

## Estrutura

```
src/
├── api/
│   ├── client.ts          # Instância Axios com interceptors JWT
│   └── services.ts        # Serviços: authApi, usersApi, petsApi, postsApi
├── assets/
│   └── main.css           # Design system (CSS variables, animações)
├── components/
│   ├── AppLayout.vue      # Layout com sidebar + mobile nav
│   ├── PostCard.vue        # Card de post do feed
│   └── CreatePostModal.vue # Modal de criação de post
├── router/
│   └── index.ts           # Rotas com guards de autenticação
├── stores/
│   ├── auth.ts            # Store de autenticação (login/register/me)
│   ├── pets.ts            # Store de pets
│   └── posts.ts           # Store de posts/feed
├── types/
│   └── index.ts           # Types TS espelhando as entidades Java
└── views/
    ├── LoginView.vue
    ├── RegisterView.vue
    ├── OnboardingView.vue  # Tela pós-cadastro
    ├── FeedView.vue        # Feed principal
    ├── NewPetView.vue      # Cadastro de pet (3 passos)
    ├── PetProfileView.vue  # Perfil do pet
    ├── UserProfileView.vue # Perfil do usuário
    ├── SettingsView.vue
    └── NotFoundView.vue
```

## Rodando localmente

```bash
npm install
npm run dev
```

A API backend deve estar rodando em `http://localhost:8080`.

## Endpoints esperados da API

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/auth/login` | Login → `{ token, user }` |
| POST | `/api/auth/register` | Registro → `{ token, user }` |
| GET | `/api/auth/me` | Usuário autenticado |
| GET | `/api/pets` | Listar pets ativos |
| POST | `/api/pets` | Criar pet |
| GET | `/api/users/:id/pets` | Pets de um usuário |
| GET | `/api/posts` | Feed (paginado) |
| POST | `/api/posts` | Criar post |
| GET | `/api/users/:id/posts` | Posts de um usuário |