"use client";

import Link from "next/link";

export default function ProductDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-text-secondary tracking-wide">
          <li>
            <Link
              href="/"
              className="hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="text-border">/</span>
          </li>
          <li>
            <Link
              href="/produtos"
              className="hover:text-gold transition-colors duration-200"
            >
              Produtos
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="text-border">/</span>
          </li>
          <li className="text-text-primary">Erro ao carregar</li>
        </ol>
      </nav>

      {/* Error Container */}
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="max-w-md text-center space-y-6">
          <div className="space-y-2">
            <h1 className="font-heading text-3xl md:text-4xl text-text-primary">
              Erro ao Carregar Produto
            </h1>
            <p className="text-text-secondary text-sm tracking-wide">
              Desculpe, houve um problema ao carregar os detalhes do produto.
            </p>
          </div>

          <div className="bg-surface rounded-lg border border-border/30 p-4 text-left">
            <p className="text-xs text-text-secondary font-mono break-words">
              {error?.message || "Erro desconhecido"}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => reset()}
              className="flex-1 bg-gold text-white font-medium py-2.5 rounded-lg hover:bg-gold/90 transition-colors duration-200"
            >
              Tentar Novamente
            </button>
            <Link
              href="/produtos"
              className="flex-1 bg-surface border border-border text-text-primary font-medium py-2.5 rounded-lg hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
