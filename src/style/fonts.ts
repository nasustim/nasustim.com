import { DynaPuff, Inter } from "next/font/google";

const fontHeading = DynaPuff({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

const fontDefault = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const fontReferenses = {
  heading: fontHeading.className,
  default: fontDefault.className,
};
