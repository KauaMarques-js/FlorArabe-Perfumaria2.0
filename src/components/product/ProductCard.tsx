import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group bg-surface rounded-2xl overflow-hidden border border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 hover:border-border/60">
      <Link
        href={`/produtos/${product.id}`}
        className="block product-image-wrapper aspect-[3/4] relative bg-background"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          priority={priority}
        />
      </Link>

      <div className="p-3 xs:p-4 sm:p-5 space-y-2 sm:space-y-3">
        <Link href={`/produtos/${product.id}`} className="block">
          <h3 className="font-heading text-sm xs:text-base sm:text-lg text-text-primary leading-snug line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-gold font-medium text-xs xs:text-sm sm:text-base">
          {formatPrice(product.price)}
        </p>

        <WhatsAppButton
          productName={product.name}
          variant="outline"
          label="Comprar"
          className="w-full"
        />
      </div>
    </article>
  );
}
