"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/config";
import { useLocalStorage } from "@/repository/local-storage";

/**
 * @note Update below colon in the string when need to refresh the consent status
 */
const key = "data-collection-consent-status:v20260606";
type ConsentStatuses = "granted" | "denied";

export const useDataCollectionConsent = () => {
  const consentStatus = useLocalStorage<ConsentStatuses>(key);

  if (!consentStatus) {
    return null;
  }

  return {
    value: consentStatus.value,
    agree: () => consentStatus.set("granted"),
    deny: () => consentStatus.set("denied"),
  };
};

/**
 * Reenders Google Analytics component only when the user granted consent.
 */
export const GoogleAnalyticsComponent = () => {
  const status = useDataCollectionConsent();

  if (!status) return null;
  if (status.value !== "granted") return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
};
