import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { getProductPromotion, getPromotionSummary } from "@/lib/promotion";
import DiscountBadge from "@/components/promotion/DiscountBadge";
import PromotionPrice from "@/components/promotion/PromotionPrice";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const promotion = getProductPromotion(product);
  const summary = getPromotionSummary(product, promotion);

  return (
    <article className="group relative h-full flex flex-col bg-surface rounded-2xl overflow-hidden border border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30">
      <div className="product-image-wrapper aspect-[3/4] relative bg-background shrink-0">
        {promotion && (
          <DiscountBadge
            label={promotion.label}
            discountPercentage={promotion.discountPercentage}
          />
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
          priority={priority}
        />
      </div>

      <div className="p-3 xs:p-4 sm:p-5 flex flex-col flex-1">
        <Link
          href={`/produtos/${product.id}`}
          aria-label={`Ver produto ${product.name}`}
          className="no-underline group block flex-1 flex flex-col"
        >
          <div>
            <h3 className="font-heading text-sm xs:text-base sm:text-lg text-text-primary leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-gold">
              {product.name}
            </h3>

            {(product.olfactoryFamily || product.gender) && (
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10px] uppercase tracking-widest text-text-secondary/80 font-medium">
                {product.olfactoryFamily && <span>{product.olfactoryFamily}</span>}
                {product.olfactoryFamily && product.gender && <span className="w-1 h-1 rounded-full bg-border"></span>}
                {product.gender && <span>{product.gender}</span>}
              </div>
            )}
          </div>

          <div className="mt-auto pt-4">
            {summary ? (
              <PromotionPrice promotion={summary} />
            ) : (
              <p className="text-gold font-medium text-xs xs:text-sm sm:text-base tracking-wide mb-3">
                {formatPrice(product.price)}
              </p>
            )}
          </div>
        </Link>

        <div className="mt-3">
          <WhatsAppButton
            productName={product.name}
            variant="outline"
            label="Comprar"
            className="w-full relative z-20"
          />
        </div>
      </div>
    </article>
  );
}
