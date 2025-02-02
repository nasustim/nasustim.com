import { Link } from "@/components/texts/Link";
import type { FC } from "react";
import { useCallback } from "react";
import type { ReactNode } from "react";
import type { I18nInlineContent, I18nInlineValue } from "./type";

export const Inline: FC<{ content: I18nInlineContent }> = ({ content }) => {
  const inlineContent = useCallback(
    (value: I18nInlineValue[number], index: number) => {
      if (typeof value === "string") {
        const result = Array<ReactNode>();
        const lines = value.split("\n");
        for (let j = 0; j < lines.length; j++) {
          result.push(lines[j]);
          if (j + 1 !== lines.length)
            result.push(<br key={`inline-linebreak-${j}`} />);
        }

        return result;
      }

      return <Inline content={value} key={`inline-content-${index}`} />;
    },
    [],
  );

  switch (content.type) {
    case "p":
      return content.value.map(inlineContent);
    case "a":
      return (
        <Link href={content.href.toString()} ariaLabel={content.areaLabel}>
          {content.value.map(inlineContent)}
        </Link>
      );
  }
};
