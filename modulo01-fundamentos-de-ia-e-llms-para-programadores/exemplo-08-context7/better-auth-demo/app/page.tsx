import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AuthButtons from "@/components/AuthButtons";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  const userLabel = session?.user?.email || session?.user?.name || null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8 text-gray-900">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Demo Better Auth + GitHub + SQLite</h1>
        <p className="mb-6 text-sm text-slate-600">
          {userLabel ? `Logado como ${userLabel}` : "Você não está logado"}
        </p>

        <AuthButtons isLoggedIn={Boolean(userLabel)} />

        <p className="mt-6 text-xs text-slate-500">
          Após login, a página redireciona de volta e mostra o estado de sessão.
        </p>
      </div>
    </main>
  );
}
