import { useMemo } from "react";
import { CAMPAIGN } from "@/config/campaign";

export function useCampaign() {
  const campaign = useMemo(() => CAMPAIGN, []);
  const isActive = useMemo(() => CAMPAIGN.enabled && CAMPAIGN.discountPercentage > 0, []);

  return {
    campaign,
    isActive,
  };
}
