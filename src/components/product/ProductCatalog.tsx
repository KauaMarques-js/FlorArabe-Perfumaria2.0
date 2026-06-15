"use client";

import { useState, useMemo } from "react";
import type { ProductSummary } from "@/types/product";
import ProductGrid from "./ProductGrid";

type ProductCatalogProps = {
  products: ProductSummary[];
};

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products;
    return products.filter((p) => p.name.toLowerCase().includes(term));
  }, [products, query]);

  return (
    <div className="space-y-10">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        {/* Search Icon */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <input
          id="catalog-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar perfume…"
          autoComplete="off"
          className="w-full bg-surface border border-border/50 rounded-full pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/10 transition-all duration-200"
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Limpar busca"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-gold transition-colors duration-200 cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <div className="text-center py-20 space-y-2">
          <p className="text-text-secondary text-sm tracking-wide">
            Nenhum perfume encontrado para{" "}
            <span className="text-text-primary font-medium">"{query}"</span>
          </p>
          <button
            onClick={() => setQuery("")}
            className="text-xs text-gold hover:text-gold-hover transition-colors duration-200 cursor-pointer"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
}
