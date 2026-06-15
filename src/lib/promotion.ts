import { Product, ProductPromotion } from "@/types/product";
import { CAMPAIGN } from "@/config/campaign";

export type PromotionSummary = {
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  label: string;
  savingsAmount: number;
};

export function isCampaignActive(): boolean {
  return CAMPAIGN.enabled && CAMPAIGN.discountPercentage > 0;
}

export function getProductPromotion(product: Product): ProductPromotion | null {
  if (product.promotion?.enabled && product.promotion.discountPercentage) {
    return {
      enabled: true,
      discountPercentage: product.promotion.discountPercentage,
      label: product.promotion.label,
    };
  }

  if (isCampaignActive()) {
    return {
      enabled: true,
      discountPercentage: CAMPAIGN.discountPercentage,
    };
  }

  return null;
}

export function getProductBasePrice(product: Product): number {
  return product.originalPrice ?? product.price;
}

export function getPromotionSummary(
  product: Product,
  promotion: ProductPromotion | null,
): PromotionSummary | null {
  if (!promotion?.enabled || !promotion.discountPercentage) {
    return null;
  }

  const basePrice = getProductBasePrice(product);
  const discountAmount = (basePrice * promotion.discountPercentage) / 100;
  const discountedPrice = Number((basePrice - discountAmount).toFixed(2));

  return {
    originalPrice: basePrice,
    discountedPrice,
    discountPercentage: promotion.discountPercentage,
    label: promotion.label ?? CAMPAIGN.badgeLabel,
    savingsAmount: Number(discountAmount.toFixed(2)),
  };
}
