import { en } from "@/i18n/contents/en";

const supportedLangs = ["en"] as const;
type SupportedLangs = (typeof supportedLangs)[number];

const fallbackLang: SupportedLangs = "en";

export function getI18nContent(lang: SupportedLangs = fallbackLang) {
  switch (lang) {
    case "en":
      return en;
    default:
      throw new Error(lang satisfies never);
  }
}
