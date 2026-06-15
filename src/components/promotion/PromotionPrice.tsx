import { formatPrice } from "@/lib/format";
import { PromotionSummary } from "@/lib/promotion";

type PromotionPriceProps = {
  promotion: PromotionSummary;
};

export default function PromotionPrice({ promotion }: PromotionPriceProps) {
  return (
    <div className="space-y-0.5 max-w-full">
      <span className="block text-text-secondary text-xs tracking-[0.2em] uppercase line-through">
        {formatPrice(promotion.originalPrice)}
      </span>
      <span className="block text-gold font-semibold text-base sm:text-lg tracking-wide">
        {formatPrice(promotion.discountedPrice)}
      </span>
    </div>
  );
}
