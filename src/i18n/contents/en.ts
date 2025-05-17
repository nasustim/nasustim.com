import type { I18ncontent } from "@/i18n/type";

export const en: I18ncontent = {
  name: {
    type: "p",
    value: ["Mitsuhiro HIBINO"],
  },
  shortDescription: {
    type: "p",
    value: [
      "A software developer living in Tokyo, Japan.\nI'm currently working on a project supporting a subsidiary's product growth and organizing the engineering process at",
      {
        type: "a",
        value: ["MIXI inc"],
        href: new URL("https://mixi.co.jp"),
        areaLabel:
          "Japanese internet company, especially famous as a pioneer of social media in the country",
      },
      ", as an engineering manager.",
    ],
  },
};
