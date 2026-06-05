import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/config";

export const GoogleAnalyticsContainer = () => {
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
};
