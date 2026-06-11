import { Metadata } from "next";
import { products } from "@/data/products";
import ProductCatalog from "@/components/product/ProductCatalog";

export const metadata: Metadata = {
  title: "Catálogo | Flor Árabe Perfumaria",
  description:
    "Explore nosso catálogo completo de perfumes árabes originais. Fragrâncias exclusivas com entrega em Cuiabá e região.",
};

export default function ProdutosPage() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-14 space-y-3">
        <h1 className="font-heading text-3xl md:text-4xl text-text-primary">
          Nosso Catálogo
        </h1>
        <p className="text-text-secondary text-sm tracking-wide">
          Cada fragrância, uma experiência única
        </p>
        <div className="gold-line max-w-24 mx-auto mt-4" />
      </div>

      <ProductCatalog products={products} />
    </section>
  );
}

