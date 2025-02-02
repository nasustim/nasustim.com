export type I18nInlineValue = Array<I18nInlineContent | string>;

export type I18nInlineContent =
  | {
      type: "p";
      value: I18nInlineValue;
    }
  | {
      type: "a";
      value: I18nInlineValue;
      href: URL;
      areaLabel: string;
    };

export type I18ncontent = {
  name: I18nInlineContent;
  shortDescription: I18nInlineContent;
};
