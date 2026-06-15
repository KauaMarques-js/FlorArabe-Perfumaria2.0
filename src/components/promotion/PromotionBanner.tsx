"use client";

import { useCampaign } from "@/hooks/useCampaign";
import { usePromotionBanner } from "@/hooks/usePromotionBanner";

export default function PromotionBanner() {
  const { campaign, isActive } = useCampaign();
  const { isVisible, closeBanner } = usePromotionBanner();

  if (!isActive || !isVisible) {
    return null;
  }

  return (
    <section className="sticky top-0 z-50 border-b border-border/50 bg-surface/95 backdrop-blur-sm shadow-[0_1px_40px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0 text-sm leading-6 text-text-primary">
          <span className="font-semibold tracking-[0.08em] text-text-primary">
            {campaign.title}
          </span>
          <span className="ml-2 text-text-secondary">
            {campaign.message}
          </span>
        </div>

        <button
          type="button"
          onClick={closeBanner}
          aria-label="Fechar anúncio de inauguração"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background text-text-secondary transition-colors duration-200 hover:border-gold/50 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/30"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>
    </section>
  );
}
