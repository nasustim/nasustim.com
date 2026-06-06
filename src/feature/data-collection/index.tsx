"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useCallback } from "react";
import { GA_MEASUREMENT_ID } from "@/config";
import { useLocalStorage } from "@/repository/local-storage";
import type { EventTypes } from "./events";

/**
 * @note Update below colon in the string when need to refresh the consent status
 */
const key = "data-collection-consent-status:v20260606";
type ConsentStatuses = "granted" | "denied";

export const useDataCollectionConsent = () => {
  const consentStatus = useLocalStorage<ConsentStatuses>(key);
  const sendEvent = useCallback(
    (event: EventTypes, value: Record<string, string>) => {
      if (consentStatus?.value !== "granted") return;
      try {
        sendGAEvent(event, value);
      } catch (_e) {
        // ignore error to avoid breaking users' experience
      }
    },
    [consentStatus?.value],
  );

  if (!consentStatus) {
    return null;
  }

  return {
    isLoading: consentStatus.isLoading,
    value: consentStatus.value,
    agree: () => consentStatus.set("granted"),
    deny: () => consentStatus.set("denied"),
    sendEvent,
  };
};

/**
 * Renders Google Analytics component only when the user granted consent.
 */
export const GoogleAnalyticsComponent = () => {
  const status = useDataCollectionConsent();

  if (!status) return null;
  if (status.value !== "granted") return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
};
