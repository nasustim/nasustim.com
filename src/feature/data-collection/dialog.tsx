"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "@/ui/basic/link-text";
import { useDataCollectionConsent } from ".";

export const DataCollectionConfirmationDialog = () => {
  // manage visibility with local state to avoid hydration mismatch
  const [shouldShowDialog, setShouldShowDialog] = useState(false);
  const status = useDataCollectionConsent();

  useEffect(() => {
    if (shouldShowDialog || !status || status.isLoading) return;
    setShouldShowDialog(status.value === null);
  }, [status, shouldShowDialog]);

  if (!shouldShowDialog) return null;
  return <_DialogInner />;
};

const _DialogInner = () => {
  const dataCollectionConsent = useDataCollectionConsent();
  return (
    <div
      className={clsx(
        "bg-black/75 backdrop-blur-sm",
        "text-primary-sub text-sm text-white/80",
        "w-full p-8",

        "transition-opacity duration-400",
        dataCollectionConsent?.value && "opacity-0 pointer-events-none",
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
            variant="secondary"
          >
            Google Analytics
          </Link>{" "}
          to analyze customer info and improve its content.
          <br />
          Do you agree to use Google Analytics for this website?
        </div>
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-4",
            "sm:flex-row", // tablet or larger
          )}
        >
          <button
            className={clsx(
              "w-[90px] h-[30px]",
              "sm:w-[70px] sm:h-[38px]", // tablet or larger

              "bg-white/50 text-black rounded-sm cursor-pointer",
            )}
            onClick={() => {
              dataCollectionConsent?.deny();
            }}
            type="button"
          >
            Deny
          </button>
          <button
            className={clsx(
              "w-[90px] h-[44px]",
              "sm:w-[120px] sm:h-[40px]", // tablet or larger
              "bg-black/90 text-white rounded-sm cursor-pointer",
            )}
            onClick={() => {
              dataCollectionConsent?.agree();
              dataCollectionConsent?.sendEvent("button_click", {
                button: "agree_data_collection",
              });
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
