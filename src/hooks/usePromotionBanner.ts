"use client";

import { useCallback, useEffect, useState } from "react";
import { CAMPAIGN } from "@/config/campaign";

const STORAGE_KEY = "flor-arabe-promotion-banner-version";

export function usePromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!CAMPAIGN.enabled) {
      setIsVisible(false);
      return;
    }

    try {
      const dismissedVersion = window.localStorage.getItem(STORAGE_KEY);
      setIsVisible(dismissedVersion !== CAMPAIGN.buildVersion);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const closeBanner = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, CAMPAIGN.buildVersion);
    } catch {
      // Ignore localStorage failures and simply hide the banner.
    }

    setIsVisible(false);
  }, []);

  return {
    campaign: CAMPAIGN,
    isVisible,
    closeBanner,
  };
}
