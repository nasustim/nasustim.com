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
  const status = useDataCollectionConsent();
  return (
    <div
      className={clsx(
        "bg-black/75 backdrop-blur-sm p-4",
        "text-primary-sub text-sm text-white/80",
        "w-full h-full",

        "transition-opacity duration-400",
        status?.value && "opacity-0 pointer-events-none",
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
              status?.deny();
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
              status?.agree();
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
