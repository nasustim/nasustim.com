import type { I18ncontent } from "@/i18n/type";

export const en: I18ncontent = {
  name: {
    type: "p",
    value: ["Mitsuhiro HIBINO"],
  },
  shortDescription: {
    type: "p",
    value: [
      "A software developer in Tokyo.\nI'm currently working as Engineering Manager at ",
      {
        type: "a",
        value: ["MIXI inc."],
        href: new URL("https://mixi.co.jp"),
        areaLabel:
          "Japanese internet company, especially famous as a pioneer of social media in the country",
      },
      ", and supporting growth and improving a subsidiary's product.",
    ],
  },
};
