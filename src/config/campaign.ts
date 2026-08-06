export interface CampaignConfig {
  enabled: boolean;
  discountPercentage: number;
  buildVersion: string;
  title: string;
  message: string;
  badgeLabel: string;
}

export const CAMPAIGN: CampaignConfig = {
  enabled: false,
  discountPercentage: 20,
  buildVersion: process.env.NEXT_PUBLIC_CAMPAIGN_BUILD_VERSION ?? "1.0.0",
  title: "Inauguração Especial",
  message: "Aproveite 20% OFF em todos os perfumes da loja.",
  badgeLabel: "Oferta de Inauguração",
};
