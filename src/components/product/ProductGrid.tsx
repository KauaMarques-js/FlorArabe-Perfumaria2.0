import type { ProductSummary } from "@/types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: ProductSummary[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 md:gap-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product as any} priority={index < 4} />
      ))}
    </div>
  );
}
