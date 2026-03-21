# Demo Next.js + Better Auth + GitHub + SQLite

Projeto demo minimalista com Next.js App Router (TypeScript), Better Auth e SQLite (better-sqlite3).

## Requisitos
- Node.js 18+ / npm
- GitHub OAuth app com callback para `http://localhost:3000`
- `.env.local` com `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`

## Passos

1. Instalar dependências:

```bash
npm install
```

2. Configurar `.env.local`:

```env
GITHUB_CLIENT_ID=seu_id
GITHUB_CLIENT_SECRET=seu_secret
```

3. Executar migração Better Auth:

```bash
npx @better-auth/cli migrate
```

4. Rodar em modo dev:

```bash
npm run dev
```

5. Acessar:

- `http://localhost:3000` (Home com botão de login)
- `http://localhost:3000/api/auth/...` (endpoint Better Auth)

## Funcionamento

- Botão "Entrar com GitHub" aciona `authClient.signIn.social` (provider: github).
- Usuário autenticado verá "Logado como ...".
- Botão "Sair" chama `authClient.signOut()`.

## Observações

- Banco local: `better-auth.sqlite` no diretório do projeto.
- Não é necessário configurar URL no `betterAuth` além do local SQLite.

