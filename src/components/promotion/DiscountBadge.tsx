type DiscountBadgeProps = {
  label?: string;
  discountPercentage?: number;
};

export default function DiscountBadge({ label, discountPercentage }: DiscountBadgeProps) {
  const displayText =
    label ??
    (discountPercentage ? `Economize ${discountPercentage}%` : "");

  if (!displayText) {
    return null;
  }

  return (
    <div className="absolute left-4 top-4 z-20 rounded-full border border-gold/25 bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-text-primary shadow-sm shadow-gold/10 backdrop-blur-sm dark:bg-surface/90">
      {displayText}
    </div>
  );
}
