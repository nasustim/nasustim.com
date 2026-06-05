"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import { GA_MEASUREMENT_ID } from "@/config";
import { useLocalStorage } from "@/repository/local-storage";
import { Link } from "@/ui/basic/link-text";

const key = "data-collection-consent-status";
type ConsentStatuses = "granted" | "denied";

export const useDataCollectionConsent = () => {
  const consentStatus = useLocalStorage<ConsentStatuses>(key);
  return {
    value: consentStatus?.value,
    agree: () => consentStatus?.set("granted"),
    deny: () => consentStatus?.set("denied"),
  };
};

export const GoogleAnalyticsComponent = () => {
  const status = useDataCollectionConsent();

  if (status.value !== "granted") return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
};

export const DataCollectionConfirmationDialog = () => {
  const status = useDataCollectionConsent();

  return (
    <div
      className={clsx(
        "bg-black/75 backdrop-blur-sm p-4",
        "text-primary-sub text-sm text-white/80",
        "w-full h-full",

        status.value && "hidden",
      )}
    >
      <div
        className={clsx(
          "flex flex-row items-center justify-center gap-4 h-full",

          "w-full", // mobile
          "sm:w-[700px] sm:mx-auto", // tablet or larger
        )}
      >
        <div className={clsx("grow-1")}>
          In this website, we use{" "}
          <Link
            href="https://analytics.google.com/"
            ariaLabel="Google Analytics"
          >
            Google Analytics
          </Link>{" "}
          to analyze customer info and improve this website.
          <br />
          Do you agree to use Google Analytics for this website?
        </div>
        <div
          className={clsx("flex flex-row items-center justify-center gap-4")}
        >
          <button
            className={clsx(
              "w-[60px] h-[30px]",
              "bg-white/50 text-black rounded-sm cursor-pointer",
            )}
            onClick={() => {
              status.deny();
            }}
            type="button"
          >
            Deny
          </button>
          <button
            className={clsx(
              "w-[60px] h-[30px]",
              "bg-black/90 text-white rounded-sm cursor-pointer",
            )}
            onClick={() => {
              status.agree();
            }}
            type="button"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};
