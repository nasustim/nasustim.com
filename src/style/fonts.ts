import { Carter_One, Inter } from "next/font/google";

/**
 * Heading font
 */
const carterOne = Carter_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-carter-one",
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const fontClassNames = [inter.variable, carterOne.variable];
