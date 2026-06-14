"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-md text-center space-y-6">
            <div className="space-y-2">
              <h1 className="font-heading text-4xl text-text-primary">
                Oops!
              </h1>
              <p className="text-text-secondary text-sm tracking-wide">
                Algo deu errado no servidor
              </p>
            </div>

            <div className="bg-surface rounded-lg border border-border p-4 text-left">
              <p className="text-xs text-text-secondary font-mono break-words">
                {error?.message || "Erro desconhecido"}
              </p>
              {error?.digest && (
                <p className="text-xs text-text-secondary/60 mt-2">
                  ID: {error.digest}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => reset()}
                className="flex-1 bg-gold text-white font-medium py-2.5 rounded-lg hover:bg-gold/90 transition-colors duration-200"
              >
                Tentar Novamente
              </button>
              <Link
                href="/"
                className="flex-1 bg-surface border border-border text-text-primary font-medium py-2.5 rounded-lg hover:border-gold/50 hover:text-gold transition-all duration-200"
              >
                Voltar Home
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
